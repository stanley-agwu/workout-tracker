import React, { FC, useState, useEffect } from 'react'
import { Container, Stack } from 'react-bootstrap';
import { Workout } from '../types';
import WorkoutDetails from '../components/WorkoutDetails'

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
    <Container className="mt-4">
      <Stack gap={3} className="col-md-5">
        {workouts.length > 0 && workouts.map((workout) => (
          <WorkoutDetails workout={workout} />
        ))}
      </Stack>
    </Container>
  )
}

export default Home