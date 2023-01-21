import Card from 'react-bootstrap/Card';
import { formatDistanceToNow } from 'date-fns'
import 'bootstrap/dist/css/bootstrap.min.css';

import { IHookProps } from '../types';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import { ReactComponent as EditIcon } from '../assets/edit.svg';
import './styles.css';

const WorkoutDetails: React.FC<IHookProps> = ({ workout, handleEdit, handleDelete }) => (
  <Card  className="details">
    <Card.Body className="card">
      <Card.Title className="title">{workout.title}</Card.Title>
      <Card.Text className="subtitle"><span className="me-3 text-muted">Repetitions: </span>{String(workout.repetitions)}</Card.Text>
      <Card.Text className="subtitle"><span className="me-3 text-muted">Load (kg): </span>{String(workout.load)}</Card.Text>
      <Card.Text className="subtitle">
        <span className="me-3 text-muted">First created: </span>
        {formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}
      </Card.Text>
      <Card.Text className="subtitle">
        <span className="me-3 text-muted">Last updated: </span>
        {formatDistanceToNow(new Date(workout.updatedAt), {addSuffix: true})}
      </Card.Text>
    </Card.Body>
    <div className="icons">
      <button
        aria-label="Delete"
        className="delete"
        onClick={() =>handleDelete(workout)}>
          <DeleteIcon width="20" height="20" />
      </button>
      <button
        aria-label="Edit"
        className="edit"
        onClick={() => handleEdit(workout)}>
          <EditIcon width="20" height="20" />
      </button>
    </div>
  </Card>
);

export default WorkoutDetails;