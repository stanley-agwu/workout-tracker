import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import renderer from 'react-test-renderer';

describe('snapshot testing', () => {
  test('snapshot for app component', () => {
    const renderedComponent = renderer.create(
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    ).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
})
