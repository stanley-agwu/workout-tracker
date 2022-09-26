import Card from 'react-bootstrap/Card';
import { IProps } from '../types';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkoutDetails: React.FC<IProps> = ({ workout }) => {
  return (
    <Card  className="me-3" style={{ width: '100%', boxShadow: '2px 2px 5px rgba(0,0,0,0.25)' }}>
      <Card.Body>
        <Card.Title className="d-flex align-items-center">{workout.title}</Card.Title>
        <Card.Text className="d-flex align-items-center"><span className="me-3 text-muted">Repetitions: </span>{String(workout.repetitions)}</Card.Text>
        <Card.Text className="d-flex align-items-center"><span className="me-3 text-muted">Load: </span>{String(workout.load)}</Card.Text>
        <Card.Text style={{ textAlign: 'left'}} className="d-flex align-items-center"><span className="me-3 text-muted">Date created: </span>{workout.createdAt}</Card.Text>
        <Card.Text style={{ textAlign: 'left'}}  className="d-flex align-items-center text-left"><span className="me-3 text-muted">Date updated: </span>{workout.updatedAt}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkoutDetails;