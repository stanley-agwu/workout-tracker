import React, { FC, useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap';

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import './styles.css';
import { ENDPOINTS } from '../constants';
import { Workout } from '../types';

const Home: FC = () => {
  const {state: { workouts }, dispatch} = useWorkoutsContext();
  const [editWorkout, setEditWorkout] = useState<Workout>();
  const { state: { user } } = useAuthContext();

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
            <WorkoutDetails key={workout._id} workout={workout} handleEdit={setEditWorkout} />
          ))}
        </Stack>
        <Stack className="col-xs-5">
          <WorkoutForm workout={editWorkout} setEditWorkout={setEditWorkout} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home;