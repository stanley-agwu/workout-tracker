import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import './styles.css';
import { IFormProps } from '../types';

const WorkoutForm: React.FC<IFormProps> = ({
  title,
  repetitions,
  load,
  error,
  showError,
  fieldError,
  handleSubmit,
  setTitle,
  setRepetitions,
  setLoad,
  setShowError,
 }: IFormProps) => {
  
  return (
    <Form 
      onSubmit={handleSubmit} 
      className="p-4 border border-1 border-light rounded form"
    >
      <Form.Group className="inputField" controlId="formBasicName">
        <Form.Label className="text-left">Name of workout:</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter name of workout"
          className={fieldError?.includes('title') ? 'field-error' : ''}
        />
      </Form.Group>

      <Form.Group className="inputField" controlId="formBasicRepetitions">
        <Form.Label>Repetitions of workout:</Form.Label>
        <Form.Control
          type="number"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
          placeholder="Enter workout count"
          className={fieldError?.includes('repetitions') ? 'field-error' : ''}
        />
      </Form.Group>
      <Form.Group className="inputField" controlId="formBasicLoad">
        <Form.Label>Workout load (in Kg):</Form.Label>
        <Form.Control
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          placeholder="Enter workout load"
          className={fieldError?.includes('load') ? 'field-error' : ''}
        />
      </Form.Group>
      <Button variant="success" type="submit" className="button-full">
        Add workout
      </Button>
      {error && showError && (
        <Alert
          variant="danger"
          onClose={() => setShowError(!showError)}
          dismissible
          className="mt-3 mx-auto p-0 mb-0"
        >
          <Alert.Heading className="text-center pt-2">Error!</Alert.Heading>
          <span className="error">{error}</span>
        </Alert>
      )}
    </Form>
  );
}

export default WorkoutForm;