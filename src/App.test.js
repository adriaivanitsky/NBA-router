import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('renders avatar the last airbender', async () => {
  render(<App />);
  const heading = await screen.findByRole('heading', { name: /Avatar The Last Airbender/i });
  expect(heading).toBeInTheDocument();
});

//behavioral tests

//so in this test ima need user clicks on character name, AND, it directs to character detail
//
test.only('user can click on character name and be directed to a character detail page', async () => {
  render(<App />);
  const name = await screen.findByRole('heading', { name: /46th/i });
  expect(name).toBeInTheDocument();
  userEvent.click(name);
  const details = await screen.findAllByRole('list');
  expect(details).toHaveLength(2);
});
