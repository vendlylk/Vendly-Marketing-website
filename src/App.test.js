import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Vendly heading', () => {
  render(<App />);
  const heading = screen.getByText(/Turn chats into orders/i);
  expect(heading).toBeInTheDocument();
});
