import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../constants';
import { Workout } from '../types';
import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

export const useHomePage = (workout: Workout | undefined,
      setEditWorkout: React.Dispatch<React.SetStateAction<Workout | undefined>>) => {
  const [title, setTitle] = useState<string>();
  const [repetitions, setRepetitions] = useState<string>();
  const [load, setLoad] = useState<string>();
  const [error, setError] = useState<any|null>(null);
  const [showError, setShowError] = useState<boolean>(true);
  const [fieldError, setFieldError] = useState<string[]>([]);

  const { state: { user } } = useAuthContext();

  const { dispatch } = useWorkoutsContext();

  useEffect(() => {
    if (workout && Boolean(Object.keys(workout))) {
      setTitle(workout.title);
      setRepetitions(workout.repetitions);
      setLoad(workout.load);
    }
  }, [workout]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = { title, repetitions, load};

    const response = workout && workout._id
      ? await fetch(`${ENDPOINTS.BASE_URL}${workout._id}`, {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${user!?.token}`
          }
        })
      : await fetch(ENDPOINTS.BASE_URL, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${user!?.token}`
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
      setEditWorkout(undefined);
      workout && workout._id
      ? dispatch({ type: 'UPDATE_WORKOUT', payload: results.workout })
      : dispatch({ type: 'CREATE_WORKOUT', payload: results.workout });
    }
  }

 const handleDelete = async (workout: Workout): Promise<void> => {
   const response = await fetch(`${ENDPOINTS.BASE_URL}/${workout?._id}`, {
     method: 'DELETE',
     headers: {
       'authorization': `Bearer ${user!.token}`,
     }
   });
   const results = await response.json();
   if (response.ok) {
     dispatch({ type: 'DELETE_WORKOUT', payload: results.workout });
   }
 }
  return {
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
  }

}