import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;

    div {
      display: flex;
      align-items: center;

      img {
        width: 28px;
        height: 28px;
        border-radius: 5px;
      }

      span {
        margin-left: 10px;
      }
    }
    svg {
      margin-right: 10px;
    }
  }
`;
