import styled from 'styled-components';

export const Container = styled.aside`
  height: calc(100vh - 60px);
  width: 20%;
  border-right: 2px solid #f5f6fd;

  h1 {
    margin-top: 20px;
    font-size: 14px;
    text-transform: uppercase;
    color: #8f929c;
  }
`;

export const Menu = styled.ul`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
`;
