import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { Container } from './styles';
import SubItem from './SubItem';

export default function Item({ data }) {
  return (
    <Container>
      <div>
        <div>
          <img src="https://api.adorable.io/avatars/40" alt="" />
          <span>{data.name}</span>
        </div>
        <FaChevronRight size={12} color="#B4B9C7" />
      </div>

      <SubItem data={data.subitems} />
    </Container>
  );
}
