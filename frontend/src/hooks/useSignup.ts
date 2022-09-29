import { useState } from 'react';
import { ENDPOINTS } from '../constants';
import { useAuthContext } from './useAuthContext';


export const useSignup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const { dispatch } = useAuthContext();

  const execute = async (...args: (string|undefined)[]) => {
    setIsLoading(true);
    setError(undefined);
    const [email, username, password] = args;

    const response = await fetch(ENDPOINTS.SIGNUP, {
      method: 'POST',
      body: JSON.stringify({email, username, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const results = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(results.error);
    }
    localStorage.setItem('user', JSON.stringify(results))
    dispatch({ type: 'SIGNIN', payload: results.user })
    setIsLoading(false);
  }
  return {
    execute,
    isLoading,
    error,
  }
}