import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 15px;
  padding: 0 10px;
  height: 100%;
  flex: 0 0 280px;
  border-radius: 15px;
  background-color: #f5f6fd;

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    height: 42px;
    margin-top: 10px;
    color: #9d9ea8;
    font-weight: 700;

    div {
      display: flex;
      align-items: center;

      svg {
        width: 32px;
        height: 32px;
        padding: 4px;
        font-weight: 700;
        border-radius: 50%;
        background-color: #0099cc;
        color: #ffffff;
      }

      h2 {
        margin-left: 10px;
      }
    }

    h2 {
      font-size: 14px;
      text-transform: uppercase;
    }
  }
  ul {
    margin-top: 30px;
  }
`;
