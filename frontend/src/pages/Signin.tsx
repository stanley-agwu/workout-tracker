import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useLogin } from '../hooks/useLogin';
import { ENDPOINTS } from '../constants';

const Signin: FC = () => {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showError, setShowError] = useState<boolean>(false);

  const { execute, isLoading, error, status } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await execute(ENDPOINTS.SIGNIN, name, password);
  }
  useEffect(() => {
    if (error) setShowError(true);
    if (status === 'success') {
      setName('');
      setPassword('');
    }
  }, [error, status])


  return (
    <>
      <div className="form-title"><h3>Sign in to Freak workouts</h3></div>
      <div className="signin">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="signin-text">Username or email address</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="signin-text">Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" className="button-full" disabled={isLoading}>
            Sign in
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
        <div className="signin-section">
          <span className="signin-text">New to Freak workouts?</span>
          <Link to="/signup">Create an account.</Link>
        </div>
      </div>
    </>
  );
}

export default Signin;