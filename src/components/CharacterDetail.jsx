import React from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetail({ characters }) {
  const { characterName } = useParams();
  const { name, photoUrl, affiliation, allies, enemies } = characters.filter(
    (character) => character.name === characterName
  )[0];
  return (
    <div>
      <h1>{name}</h1>
      <img src={photoUrl} />
      <h3>Affiliation: {affiliation}</h3>
      <ul>
        Allies
        {allies.map((ally) => (
          <li key={ally}>{ally}</li>
        ))}
      </ul>
      <ul>
        Enemies
        {enemies.map((enemy) => (
          <li key={enemy}>{enemy}</li>
        ))}
      </ul>
    </div>
  );
}
