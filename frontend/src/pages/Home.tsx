import React, { FC, useState, useEffect } from 'react'
import { Container, Stack } from 'react-bootstrap';
import { Workout } from '../types';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home: FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts');
      const results = await response.json();

      if (response.status === 200) {
        setWorkouts(results.workouts);
      }
    }
    fetchWorkouts();
  }, []);

  return (
    <Container className="my-4">
      <Stack gap={4} direction="horizontal">
        <Stack gap={3} className="col-md-5">
          {workouts.length > 0 && workouts.map((workout) => (
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

export default Home