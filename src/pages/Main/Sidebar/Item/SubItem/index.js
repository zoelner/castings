import React from 'react';

import { Container } from './styles';

export default function SubItem({ data }) {
  return (
    <Container>
      {data.map(item => (
        <li className={item.active ? 'active' : 'disabled'}>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </li>
      ))}
    </Container>
  );
}
