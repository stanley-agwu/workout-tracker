import { useState } from 'react';
import { useAuthContext } from './useAuthContext';


export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<string>();

  const { dispatch } = useAuthContext();

  const execute = async (url: string, ...args: (string|undefined)[]) => {
    setIsLoading(true);
    setStatus('loading');
    setError(undefined);
    let body;
    if (args.length === 2) {
      const [identifier, password] = args;
      body = { identifier, password };
    } else {
      const [email, username, password] = args;
      body = { email, username, password };
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const results = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(results.error);
      setStatus('error');
    } else {
      const user = {
        id: results.user._id,
        token: results.token,
      };
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'SIGNIN', payload: results });
      setIsLoading(false);
      setStatus('success');
    }
  }
  return {
    execute,
    isLoading,
    error,
    status,
  }
}