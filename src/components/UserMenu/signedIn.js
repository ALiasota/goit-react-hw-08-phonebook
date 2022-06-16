import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from 'react-bootstrap/Button';

import avatar from './default-avatar.png';

export default function SignedIn() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        src={avatar}
        alt="avatar"
        style={{ width: '32px', marginRight: '10px' }}
      />
      <span style={{ marginRight: '10px', fontWeight: 'bold' }}>
        Welcome {userName}
      </span>
      <Button type="button" onClick={handleLogOut}>
        Log out
      </Button>
    </nav>
  );
}
