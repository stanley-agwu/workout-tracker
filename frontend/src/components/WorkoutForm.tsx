import React, { FC, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import './styles.css';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { ENDPOINTS } from '../constants';
import { IFormProps, Workout } from '../types';

const WorkoutForm: FC<IFormProps> = ({ workout}) => {
  const [title, setTitle] = useState<string>();
  const [repetitions, setRepetitions] = useState<string>();
  const [load, setLoad] = useState<string>();
  const [error, setError] = useState<any|null>(null);
  const [showError, setShowError] = useState<boolean>(true);
  const [fieldError, setFieldError] = useState<string[]>([]);

  useEffect(() => {
    const editHandler = (workout: Workout) => {
      setTitle(workout.title);
      setRepetitions(String(workout.repetitions));
      setLoad(String(workout.load));
    };
    if (workout) editHandler(workout);
  }, [workout])

  const { dispatch } = useWorkoutsContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = { title, repetitions, load};

      const response = workout && workout._id
        ? await fetch(`${ENDPOINTS.BASE_URL}${workout._id}`, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        : await fetch(ENDPOINTS.BASE_URL, {
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
        setFieldError(results.fields);
      }
      if (response.ok) {
        setError(null);
        setFieldError([]);
        setTitle('');
        setRepetitions('');
        setLoad('');
        workout && workout._id
        ? dispatch({ type: 'UPDATE_WORKOUT', payload: results.workout })
        : dispatch({ type: 'CREATE_WORKOUT', payload: results.workout });
      }
  }

  return (
    <Form 
      onSubmit={handleSubmit} 
      className="p-4 border border-1 border-light rounded form"
    >
      <Form.Group className="inputField" controlId="formBasicName">
        <Form.Label className="text-left">Name of workout:</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter name of workout"
          className={fieldError?.includes('title') ? 'field-error' : ''}
        />
      </Form.Group>

      <Form.Group className="inputField" controlId="formBasicRepetitions">
        <Form.Label>Repetitions of workout:</Form.Label>
        <Form.Control
          type="number"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
          placeholder="Enter workout count"
          className={fieldError?.includes('repetitions') ? 'field-error' : ''}
        />
      </Form.Group>
      <Form.Group className="inputField" controlId="formBasicLoad">
        <Form.Label>Workout load (in Kg):</Form.Label>
        <Form.Control
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          placeholder="Enter workout load"
          className={fieldError?.includes('load') ? 'field-error' : ''}
        />
      </Form.Group>
      <Button variant="success" type="submit" className="button-full">
        Add workout
      </Button>
      {error && showError && (
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
    </Form>
  );
}

export default WorkoutForm;