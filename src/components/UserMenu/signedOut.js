import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default function SignedOut() {
  return (
    <nav className="rounded border border-1 navbar navbar-expand-lg navbar-light  d-flex justify-content-around bg-light bg-white ">
      <LinkContainer to="login">
        <Button>Login</Button>
      </LinkContainer>

      <LinkContainer to="register">
        <Button>Register</Button>
      </LinkContainer>
    </nav>
  );
}
