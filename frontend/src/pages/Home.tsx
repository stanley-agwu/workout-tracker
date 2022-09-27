import React, { FC, useEffect} from 'react'
import { Container, Stack } from 'react-bootstrap';

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import './styles.css';
import { ENDPOINTS } from '../constants';

const Home: FC = () => {
  const {state: { workouts }, dispatch} = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(ENDPOINTS.BASE_URL);
      const results = await response.json();

      if (response.status === 200) {
        dispatch({ type: 'SET_WORKOUTS', payload: results.workouts });
      }
    }
    fetchWorkouts();
  }, [dispatch]);

  return (
    <Container>
      <Stack gap={4} direction="horizontal" className="spacing">
        <Stack gap={3} className="col-md-5">
          {!!workouts.length && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </Stack>
        <Stack className="col-xs-5">
          <WorkoutForm />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home;