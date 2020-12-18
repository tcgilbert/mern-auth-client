import { render, screen } from '@testing-library/react';
import App from './App';
import Welcome from './components/Welcome'


test('render the welcome component', () => {
  render(<Welcome />)
  const h1Element = screen.getByText(/Welcome/i)
  expect(h1Element).toBeInTheDocument();
})