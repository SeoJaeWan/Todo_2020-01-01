import React from 'react';
import { createGlobalStyle } from 'styled-components';

import TodoContainer from './Container/TodoContainer';

const App = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dcdde1;
  }

`;

  return (
    <>
      <GlobalStyle />
      <TodoContainer />
    </>
  );
};

export default App;
