import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Countdown Timer text', () => {
  render(<App />);
  const textElement = screen.getByText(/Countdown Timer/i);
  expect(textElement).toBeInTheDocument();
});
