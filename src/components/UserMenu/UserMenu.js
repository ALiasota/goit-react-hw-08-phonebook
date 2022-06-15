import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import SignedIn from './signedIn';
import SignedOut from './signedOut';

export default function UserMenu() {
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? <SignedIn /> : <SignedOut />}</>;
}
