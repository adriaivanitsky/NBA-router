import CharacterDetail from './CharacterDetail';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

const characters = [
  {
    _id: '5cf5679a915ecad153ab68c8',
    allies: ['Royal Earthbender Guards'],
    enemies: ['Chin'],
    photoUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
    name: '46th Earth King',
    affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
  },
  {
    _id: '5cf5679a915ecad153ab68c9',
    allies: ['Appa'],
    enemies: ['Azula'],
    photoUrl:
      'https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003',
    name: 'Aang',
    affiliation: ' Air Acolytes Air Nomads Air Scouts (formerly) Team Avatar',
  },
];

//component test
test('should render the matching character from params', async () => {
  render(
    <MemoryRouter initialEntries={['/characters/46th%20Earth%20King']}>
      <Route path="/characters/:characterName">
        <CharacterDetail characters={characters} />
      </Route>
    </MemoryRouter>
  );
  const heading = await screen.findByRole('heading', { name: /46th/i });
  expect(heading).toBeInTheDocument();
});
