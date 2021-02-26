import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const appElement = screen.getByText(/app/i);
  expect(appElement).toBeInTheDocument();
});
