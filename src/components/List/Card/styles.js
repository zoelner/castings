import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 2px 0 rgba(192, 208, 230, 0.8);
  height: 100px;
  display: flex;

  p {
    font-weight: 500;
    line-height: 20px;
  }

  .left {
    margin-top: -5px;
      img {
      margin-top: 5px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      }
  }

  .right {
    margin-left: 10px;
    width: 100%;

    h1 {
      display: block;
      font-size: 14px;
      color: #3a3b43;
    }

    h2 {
      margin-top: 5px;
      font-size: 12px;
      font-weight: 400;
      color: #9d9ea8;
    }   
`;
