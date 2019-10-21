import React from 'react';

import { Container, Menu } from './styles';
import Item from './Item';

export default function Sidebar() {
  return (
    <Container>
      <h1>Projects</h1>

      <Menu>
        <Item
          data={{
            id: 'item-1',
            name: 'Castings',
            subitems: [
              {
                id: 'sub-1',
                name: 'Dashboard',
                role: 'Read',
                active: true,
              },
              {
                id: 'sub-2',
                name: 'Form',
                role: 'Read/Write',
                active: false,
              },
            ],
          }}
        />
      </Menu>
    </Container>
  );
}
