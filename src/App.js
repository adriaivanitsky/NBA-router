import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import { useEffect, useState } from 'react';
import CharacterDetail from './components/CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
      const data = await resp.json();
      setCharacters(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home characters={characters} />
        </Route>
        <Route path="/characters/:characterName">
          <CharacterDetail characters={characters} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
