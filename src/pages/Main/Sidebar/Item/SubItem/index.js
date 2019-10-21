import React from 'react';

import { Container } from './styles';

export default function SubItem() {
  return (
    <Container>
      <li className="active">
        <strong>Katerina</strong>
        <span>Main Role</span>
      </li>
      <li>
        <strong>Katerina</strong>
        <span>Main Role</span>
      </li>
      <li>
        <strong>Katerina</strong>
        <span>Main Role</span>
      </li>
      <li className="disabled">
        <strong>Katerina</strong>
        <span>Main Role</span>
      </li>
    </Container>
  );
}
