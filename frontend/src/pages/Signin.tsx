import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signin: FC = () => {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <>
      <div className="form-title"><h3>Sign in to Freak workouts</h3></div>
      <div className="signin">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="signin-text">Username or email address</Form.Label>
            <Form.Control type="email" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="signin-text">Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" className="button-full">
            Sign in
          </Button>
        </Form>
        <div className="signin-section">
          <span className="signin-text">New to Freak workouts?</span>
          <Link to="/signup">Create an account.</Link>
        </div>
      </div>
    </>
  );
}

export default Signin;