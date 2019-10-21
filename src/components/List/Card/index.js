import React from 'react';

import Progress from '../../Progress';

import { Container } from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <div className="left">{data.user && <img src={data.user} alt="" />}</div>
      <div className="right">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <Progress min={0} max={10} value={3} />
      </div>
    </Container>
  );
}
