import Card from 'react-bootstrap/Card';
import { IProps } from '../types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import './styles.css';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutDetails: React.FC<IProps> = ({ workout }) => {
   const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: 'DELETE',
    });
    const results = await response.json();
    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: results.workout });
    }
  }
  return (
    <Card  className="details">
      <Card.Body className="card">
        <Card.Title className="title">{workout.title}</Card.Title>
        <Card.Text className="subtitle"><span className="me-3 text-muted">Repetitions: </span>{String(workout.repetitions)}</Card.Text>
        <Card.Text className="subtitle"><span className="me-3 text-muted">Load (kg): </span>{String(workout.load)}</Card.Text>
        <Card.Text className="subtitle"><span className="me-3 text-muted">Date created: </span>{workout.createdAt}</Card.Text>
        <Card.Text className="subtitle"><span className="me-3 text-muted">Date updated: </span>{workout.updatedAt}</Card.Text>
      </Card.Body>
      <div className="icons">
        <DeleteIcon width="23" height="23" onClick={handleDelete} />
      </div>
    </Card>
  );
}

export default WorkoutDetails;