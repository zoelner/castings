import React from 'react';

import { Container, Content } from './styles';

export default function Progress(props) {
  return (
    <Container>
      <Content {...props} /> <span>{`${props.value}/${props.max}`}</span>
    </Container>
  );
}
