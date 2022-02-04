import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders avatar the last airbender', async () => {
  render(<App />);
  const heading = await screen.findByRole('heading', { name: /Avatar The Last Airbender/i });
  expect(heading).toBeInTheDocument();
});

//behavioral tests
