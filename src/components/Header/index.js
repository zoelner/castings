import React from 'react';
import { MdPlayCircleFilled } from 'react-icons/md';

import { Container, Left, Right } from './styles';

export default function Header() {
  return (
    <Container>
      {/* Left */}
      <Left>
        <MdPlayCircleFilled color="#4E9AFC" size={24} />
        <ul>
          <li>Actors</li>
          <li>Projects</li>
          <li className="active">Castings</li>
          <li>Payouts</li>
          <li>Team</li>
        </ul>
      </Left>
      {/* Right */}
      <Right>
        {/* Search */}

        <input id="search" type="text" placeholder="Search" />
        {/* Notification */}
        <span>3</span>
        {/* Profile Image */}
        <img src="https://api.adorable.io/avatars/40/zoelner.png" alt="" />
      </Right>
    </Container>
  );
}
