import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Signin from '../Signin';

const MockedSignin = () => (
  <BrowserRouter>
    <Signin />
  </BrowserRouter>
);

describe('signin form', () => {
  test('should be able to type a username', () => {
    render(<MockedSignin />);
    const emailInputField = screen.getByRole('textbox', { name: /username or email address/i });
    userEvent.type(emailInputField, 'Gregory Warner')
    expect(emailInputField).toHaveDisplayValue('Gregory Warner');
  })

  test('should be able to type an email', () => {
    render(<MockedSignin />);
    const emailInputField = screen.getByRole('textbox', { name: /username or email address/i });
    userEvent.type(emailInputField, 'gregory@gmail.com')
    expect(emailInputField).toHaveDisplayValue('gregory@gmail.com');
  })

  test('should be able to type a password', () => {
    render(<MockedSignin />);
    const passwordInputField = screen.getByLabelText(/password/i);
    userEvent.type(passwordInputField, 'password1')
    expect(passwordInputField).toHaveDisplayValue('password1');
  })

  // test failed.***  TODO: investigate why it fails.****
  test('should display error message when form is submitted empty', async () => {
    render(<MockedSignin />);
    const emailInputField = screen.getByRole('textbox', { name: /username or email address/i });
    const passwordInputField = screen.getByLabelText(/password/i);
    const signInButton = screen.getByRole('button', { name: /sign in/i });
    const formErrorElement = screen.queryByText(/All fields are required/i);
    expect(formErrorElement).not.toBeInTheDocument();

    userEvent.type(emailInputField, '');
    userEvent.type(passwordInputField, '');
    userEvent.click(signInButton);
    // fireEvent.click(signInButton);
    const formErrorElement2 = await screen.findByText(/All fields are required/i);
    expect(formErrorElement2).toBeInTheDocument();
  })
})