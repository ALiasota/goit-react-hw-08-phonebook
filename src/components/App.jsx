import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import UserMenu from './UserMenu';
// const UserMenu = lazy(() => import('./UserMenu'));
const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./LogIn'));
const ContactForm = lazy(() => import('./ContactForm'));
// const Filter = lazy(() => import('./Filter'));
// const ContactsList = lazy(() => import('./ContactsList'));

const App = () => {
  return (
    <Container className="p-3">
      <UserMenu />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Filter /> */}
          {/* <h1>Contacts</h1> */}
          {/* <ContactsList /> */}
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
