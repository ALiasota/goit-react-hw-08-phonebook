import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default function SignedOut() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
      <LinkContainer to="login">
        <Button>Login</Button>
      </LinkContainer>

      <LinkContainer to="register">
        <Button>Register</Button>
      </LinkContainer>
    </nav>
  );
}
