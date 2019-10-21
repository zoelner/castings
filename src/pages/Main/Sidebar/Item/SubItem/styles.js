import styled from 'styled-components';

export const Container = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    padding-left: 38px;

    &.active {
      border-right: 3px solid #4e9afc;
      background-color: #f5f6fd;
    }

    &.disabled {
      opacity: 0.4;
    }

    strong {
      display: block;
      font-weight: 400;
      color: #4c4d53;
    }

    span {
      display: block;
      margin-top: 5px;
      font-size: 12px;
      color: #9d9ea8;
    }
  }
`;
