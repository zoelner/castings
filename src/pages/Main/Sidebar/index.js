import React from 'react';

import { Container, Menu } from './styles';
import Item from './Item';

export default function Sidebar() {
  return (
    <Container>
      <h1>Projects</h1>

      <Menu>
        <Item />
        <Item />
      </Menu>
    </Container>
  );
}
