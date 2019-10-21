import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  height: 65px;
  padding-left: 40px;
  margin-top: 5px;

  margin-bottom: 5px;
  border-bottom: 2px solid #f5f6fd;

  h1 {
    display: block;
    font-size: 18px;
    color: #3a3b43;
  }

  h2 {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #9d9ea8;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-left: 10px;
  margin-top: 10px;
  overflow-x: scroll;
`;
