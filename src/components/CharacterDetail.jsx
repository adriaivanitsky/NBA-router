import React from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const { name } = useParams();
  return <div>{name}</div>;
}
