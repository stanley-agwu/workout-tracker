import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { useLogin } from '../hooks/useLogin';
import { ENDPOINTS } from '../constants'

const Signup: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const {execute, isLoading, error, status } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await execute(ENDPOINTS.SIGNUP, email, username, password);
  }
  useEffect(() => {
    if (error) setShowError(true);
    if (status === 'success') {
      setEmail('');
      setUsername('');
      setPassword('');
    }
  }, [error, status])
  return (
    <>
      <div className="form-title"><h3>Sign up to Freak workouts</h3></div>
      <div className="signup">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label className="signup-text">Create a username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="signup-text">Enter your email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="signup-text">Create a Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button aria-label="Sign up" variant="success" type="submit" className="button-full" disabled={isLoading}>
            Sign up
          </Button>
        </Form>
        {showError && (
          <Alert
            variant="danger"
            onClose={() => setShowError(false)}
            dismissible
            className="mt-3 mx-auto p-0 mb-0"
          >
            <Alert.Heading className="text-center pt-2">Error!</Alert.Heading>
            <span className="error">{error}</span>
          </Alert>
        )}
        <div className="signup-section">
          <span className="signin-text">Already have an account?</span>
          <Link to="/signin">Please sign in.</Link>
        </div>
      </div>
    </>
  );
}

export default Signup;