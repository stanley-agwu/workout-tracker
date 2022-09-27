import Card from 'react-bootstrap/Card';
import { IProps } from '../types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const WorkoutDetails: React.FC<IProps> = ({ workout }) => {
  return (
    <Card  className="details">
      <Card.Body>
        <Card.Title className="title">{workout.title}</Card.Title>
        <Card.Text className="subtitle"><span className="me-3 text-muted">Repetitions: </span>{String(workout.repetitions)}</Card.Text>
        <Card.Text className="subtitle"><span className="me-3 text-muted">Load (kg): </span>{String(workout.load)}</Card.Text>
        <Card.Text className="subtitle"><span className="me-3 text-muted">Date created: </span>{workout.createdAt}</Card.Text>
        <Card.Text className="subtitle"><span className="me-3 text-muted">Date updated: </span>{workout.updatedAt}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkoutDetails;