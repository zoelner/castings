import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  span {
    margin-left: 10px;
    color: #828491;
    font-size: 14px;
  }
`;

export const Content = styled.progress`
  & {
    width: 100%;
    height: 5px;
  }
  
 

  &[value] {
      /* Reset the default appearance */
      -webkit-appearance: none;
      appearance: none;
      
    }

    &[value]::-webkit-progress-bar {
      background-color: #eee;
      border-radius: 2px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }

    &[value]::-webkit-progress-value {
      background-color: #0099cc;

      border-radius: 2px;
      background-size: 35px 20px, 100% 100%, 100% 100%;
    }
  }
`;
