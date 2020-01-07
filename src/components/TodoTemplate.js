// 화면을 가운데 정렬 및 앱 타일틀을 보여준다

import React from 'react';
import { Template } from './style/Style';

const TodoTemplate = ({ children, changeHeight }) => {
  return (
    <Template changeHeight={changeHeight}>
      <div className="app-title">Todo List</div>
      <div className="contents">{children}</div>
    </Template>
  );
};
export default TodoTemplate;
