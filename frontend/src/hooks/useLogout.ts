import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();

  const execute = () => {
    localStorage.removeItem('user');

    dispatch({ type: 'SIGNOUT', payload: null });
    workoutsDispatch({ type: 'SET_WORKOUTS', payload: [] });
  }

  return {
    execute
  }
}