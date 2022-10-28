import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

describe('signin form rendered on initial loading of component', () => {
  test('renders signin form - empty', () => {
    render(
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    );
    const header = screen.getByRole('heading', { name: /sign in to freak workouts/i });
    // const emailInputField = screen.getByRole('textbox', { name: /username or email address/i });
    // const passwordInputField = screen.getByLabelText(/password/i);
    // const signInButton = screen.getByRole('button', { name: /sign in/i });
    // expect(header).toBeInTheDocument();
    // expect(emailInputField).toHaveDisplayValue('');
    // expect(passwordInputField).toHaveDisplayValue('');
    expect(header).toBeInTheDocument();

  });
})
