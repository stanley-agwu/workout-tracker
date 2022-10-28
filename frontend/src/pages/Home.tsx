import React, { FC, useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap';

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import './styles.css';
import { ENDPOINTS } from '../constants';
import { Workout } from '../types';
import { useHomePage } from '../hooks/useHome';

const Home: FC = () => {
  const {state: { workouts }, dispatch} = useWorkoutsContext();
  const [editWorkout, setEditWorkout] = useState<Workout>();
  const { state: { user } } = useAuthContext();

  const {
    title,
    repetitions,
    load,
    error,
    showError,
    fieldError,
    handleSubmit,
    handleDelete,
    setTitle,
    setRepetitions,
    setLoad,
    setShowError,
  } = useHomePage(editWorkout, setEditWorkout);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(ENDPOINTS.BASE_URL, {
        headers: {
          'authorization': `Bearer ${user!.token}`
        }
      });
      const results = await response.json();

      if (response.status === 200) {
        dispatch({ type: 'SET_WORKOUTS', payload: results.workouts });
      }
    }
    if (user) fetchWorkouts();
  }, [dispatch, user]);

  return (
    <Container>
      <Stack gap={4} direction="horizontal" className="spacing">
        <Stack gap={3} className="col-md-5">
          {Boolean(workouts.length) && workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
              handleEdit={setEditWorkout}
              handleDelete={handleDelete}
            />
          ))}
        </Stack>
        <Stack className="col-xs-5">
          <WorkoutForm
            title={title}
            repetitions={repetitions}
            load={load}
            error={error}
            showError={showError}
            fieldError={fieldError}
            setTitle={setTitle}
            setRepetitions={setRepetitions}
            setLoad={setLoad}
            setShowError={setShowError}
            handleSubmit={handleSubmit}
        />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home;