// 화면을 가운데 정렬 및 앱 타일틀을 보여준다

import React from 'react';
import { Template } from './TemplateStyle';

const TodoTemplate = ({ children }) => {
  return (
    <Template>
      <div className="app-title">Todo List</div>
      <div className="contents">{children}</div>
    </Template>
  );
};
export default TodoTemplate;
