import { Link } from 'react-router-dom';

export default function Home({ characters }) {
  return (
    <div>
      {characters.map(({ _id, name, photoUrl }) => (
        <Link key={_id} to={`/characters/${name}`}>
          <h2>{name}</h2>
          <img src={photoUrl} />
        </Link>
      ))}
    </div>
  );
}
