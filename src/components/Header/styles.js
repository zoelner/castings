import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  height: 60px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  ul {
    margin-left: 80px;
    list-style: none;
    display: flex;

    li {
      color: #9899ab;
      font-weight: 700;
      letter-spacing: 0.4px;

      :not(:first-child) {
        margin-left: 45px;
      }

      &.active {
        color: #3a3b43;

        ::after {
          content: '';
          display: block;
          margin-top: 5px;
          height: 3px;
          width: 45%;
          border-radius: 10px;
          background-color: #4e9afc;
        }
      }
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    padding: 10px 25px;
    border: 1px solid #f0f1f5;
    border-radius: 15px;
    margin-right: 30px;

    ::placeholder {
      left: 10px;
    }
  }

  span {
    text-align: center;
    padding: 6px 12px;
    border-radius: 8px;
    color: #ffffff;
    font-size: 12px;
    background-color: #4e9afc;
    margin-right: 20px;
    font-weight: 700;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
