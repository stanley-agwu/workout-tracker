import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import './styles.css';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm: FC = () => {
  const [title, setTitle] = useState<string>();
  const [repetitions, setRepetitions] = useState<string>();
  const [load, setLoad] = useState<string>();
  const [error, setError] = useState<any|null>(null);
  const [showError, setShowError] = useState<boolean>(true);

  const { dispatch } = useWorkoutsContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = { title, repetitions, load};

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const results = await response.json();
    if (!response.ok) {
      setError(results.error);
      setShowError(true);
    }
    if (response.ok) {
      setError(null);
      setTitle('');
      setRepetitions('');
      setLoad('');
      dispatch({ type: 'CREATE_WORKOUT', payload: results.workout });
    }
  }

  return (
    <Form 
      onSubmit={handleSubmit} 
      className="p-4 border border-1 border-light rounded form"
    >
      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicName">
        <Form.Label className="text-left">Name of workout:</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter name of workout" />
      </Form.Group>

      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicRepetitions">
        <Form.Label>Repetitions of workout:</Form.Label>
        <Form.Control type="text" value={repetitions} onChange={(e) => setRepetitions(e.target.value)} placeholder="Enter workout count" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicLoad">
        <Form.Label>Workout load (in Kg):</Form.Label>
        <Form.Control type="text" value={load} onChange={(e) => setLoad(e.target.value)} placeholder="Enter workout load" />
      </Form.Group>
      <Button variant="success" type="submit" style={{ width: "100%" }}>
        Submit
      </Button>
      {error && showError && (
        <Alert
          variant="danger"
          onClose={() => setShowError(false)}
          dismissible
          className="mt-3 mx-auto p-0 mb-0"
        >
          <Alert.Heading>Error!</Alert.Heading>
          <span className="error">{error}</span>
        </Alert>
      )}
    </Form>
  );
}

export default WorkoutForm;