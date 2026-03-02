import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login links in navbar', () => {
  render(<App />);
  const studentLink = screen.getByText(/Student Login/i);
  const facultyLink = screen.getByText(/Faculty Login/i);
  expect(studentLink).toBeInTheDocument();
  expect(facultyLink).toBeInTheDocument();
});
