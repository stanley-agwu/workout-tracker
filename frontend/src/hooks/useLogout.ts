import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const execute = () => {
    localStorage.removeItem('user');

    dispatch({ type: 'SIGNOUT', payload: null });
  }

  return {
    execute
  }
}