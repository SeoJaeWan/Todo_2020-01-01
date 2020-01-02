// 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트

import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import { ListItem, TodoListItemVirtualized } from './style/Style';

const TodoListItem = ({ todo, onDelete, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <TodoListItemVirtualized style={style}>
      <ListItem>
        <div
          className={cn('checkBox', { checked })}
          onClick={() => onToggle(id)}
        >
          {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onDelete(id)}>
          <MdRemoveCircleOutline />
        </div>
      </ListItem>
    </TodoListItemVirtualized>
  );
};

/*
  많은 양의 데이터가 추가되었을 때 바뀐 항목외 다른 항목은 리렌더링되지 않게 하기위해서 React.memo 함수를 사용하였다.
  이는 컴포넌트의 props가 바뀌지 않았다면, 리렌더링 되지 않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화해 줄 수 있다.
  이제 TodoListItem 컴포넌트는 todo, onDelete, onToggle이 바뀌지 않으면 리렌더링을 하지 않는다.

  이처럼 React.memo는 리스트 관련 컴포넌트를 작성할 떄 리스트 아이템과 리스트, 두 가지 컴포넌트를 최적화 하는 것을 잊어선 안된다.
*/
export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);
