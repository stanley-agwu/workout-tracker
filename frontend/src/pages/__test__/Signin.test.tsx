import { render, screen, waitFor } from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Signin from '../Signin';

const MockedSignin = () => (
  <BrowserRouter>
    <Signin />
  </BrowserRouter>
);

describe('signin form', () => {
  test('renders signin form - empty', () => {
    render(<MockedSignin />);
    const header = screen.getByRole('heading', { name: /sign in to freak workouts/i });
    const emailInputField = screen.getByRole('textbox', { name: /username or email address/i });
    const passwordInputField = screen.getByLabelText(/password/i);
    const signInButton = screen.getByRole('button', { name: /sign in/i });
    expect(header).toBeInTheDocument();
    expect(emailInputField).toHaveDisplayValue('');
    expect(passwordInputField).toHaveDisplayValue('');
    expect(signInButton).toBeInTheDocument();
  })
  test('should fill form', () => {
    render(<MockedSignin />);
    const emailInputField = screen.getByRole('textbox', { name: 'Username or email address' });
    const passwordInputField = screen.getByLabelText('Password');

    userEvent.type(emailInputField, 'Gregory Warner');
    userEvent.type(passwordInputField, 'password1');

    expect(emailInputField).toHaveDisplayValue('Gregory Warner');
    expect(passwordInputField).toHaveDisplayValue('password1');
  })
  
  test.skip('succesful sign in', async () => {
    render(<MockedSignin />);
    const emailInputField = screen.getByRole('textbox', { name: 'Username or email address' });
    const passwordInputField = screen.getByLabelText('Password');
    const signInButton = screen.getByRole('button', { name: 'Sign in'});

    userEvent.type(emailInputField, 'Gregory Warner');
    userEvent.type(passwordInputField, 'password1');

    userEvent.click(signInButton);

    await waitFor (() => expect(screen.getByRole('textbox', { name: 'Username or email address' })).toHaveDisplayValue(''));
    await waitFor (() => expect(screen.getByLabelText('Password')).toHaveDisplayValue(''));
  })
})