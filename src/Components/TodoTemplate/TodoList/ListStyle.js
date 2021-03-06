import styled from 'styled-components';

export const List = styled.div`
  height: 650px;
  background-color: #fff;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;
