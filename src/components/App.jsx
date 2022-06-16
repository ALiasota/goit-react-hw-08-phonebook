import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations } from '../redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import UserMenu from './UserMenu';
const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./LogIn'));
const ContactForm = lazy(() => import('./ContactForm'));

// const ContactsList = lazy(() => import('./ContactsList'));

const App = () => {
  const dispatch = useDispatch();
  // const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container className="p-3" style={{ width: '320px' }}>
      <UserMenu />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<Navigate replace to="login" />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Navigate replace to="contacts" />} />
            <Route path="contacts" element={<ContactForm />} />
          </Route>

          {/* <Filter /> */}
          {/* <h1>Contacts</h1> */}
          {/* <ContactsList /> */}
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
