import { render, screen } from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import { Workout } from '../../types';
import WorkoutForm from '../WorkoutForm';

const workout: Workout = {
  createdAt: "2022-10-07T09:39:42.138Z",
  load: '20000',
  repetitions: '355',
  title: "Power Lifting 2000kg",
  updatedAt: "2022-10-19T19:29:45.653Z",
  _id: "633ff3dedfa60e8e88c274c5",
};

describe('workout form', () => {
  test('renders workout form', () => {
    render(<WorkoutForm workout={workout} setEditWorkout={jest.fn()} />);

    const name = screen.getByLabelText('Name of workout:');
    const repetitions = screen.getByPlaceholderText('Enter workout count');
    const load = screen.getByPlaceholderText('Enter workout load');
    const button = screen.getByRole('button', { name: 'Add workout'});
    
    expect(name).toBeInTheDocument();
    expect(repetitions).toBeInTheDocument();
    expect(load).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  test('form initially rendered with fields empty', () => {
    render(<WorkoutForm workout={workout} setEditWorkout={jest.fn()} />);

    const name = screen.getByLabelText('Name of workout:');
    const repetitions = screen.getByPlaceholderText('Enter workout count');
    const load = screen.getByPlaceholderText('Enter workout load');
    const button = screen.getByRole('button', { name: 'Add workout'});
    
    expect(name).toHaveTextContent('');
    expect(repetitions).toHaveTextContent('');
    expect(load).toHaveTextContent('');
    expect(button).not.toBeDisabled();
  })
})

describe('form actions', () => {
  test('should be able to create a new workout', async () => {
    render(<WorkoutForm workout={workout} setEditWorkout={jest.fn()} />);

    const name = screen.getByLabelText('Name of workout:');
    const repetitions = screen.getByPlaceholderText('Enter workout count');
    const load = screen.getByPlaceholderText('Enter workout load');
    const button = screen.getByRole('button', { name: 'Add workout'});

    userEvent.type(name, 'Power Lifting 2000kg');
    userEvent.type(repetitions, '355');
    userEvent.type(load, '20000');
    userEvent.click(button);

    expect(name).toHaveTextContent('');
    expect(repetitions).toHaveTextContent('');
    expect(load).toHaveTextContent('');
  })
})