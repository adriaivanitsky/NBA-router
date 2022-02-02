import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Avatar The Last Airbender/i);
  expect(linkElement).toBeInTheDocument();
});
