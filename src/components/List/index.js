import React from 'react';
import { MdStarBorder } from 'react-icons/md';

import Card from './Card';

import { Container } from './styles';

export default function List({ data }) {
  return (
    <Container>
      <header>
        <div>
          <MdStarBorder />
          <h2>{data.title}</h2>
        </div>
        <span> {data.cards.length || 0}</span>
      </header>

      <ul>
        {data.cards.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </Container>
  );
}
