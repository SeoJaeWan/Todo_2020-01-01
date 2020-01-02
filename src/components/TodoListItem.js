// 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트

import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import { ListItem } from './style/Style';

const TodoListItem = ({ todo, onDelete, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <ListItem>
      <div className={cn('checkBox', { checked })} onClick={() => onToggle(id)}>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onDelete(id)}>
        <MdRemoveCircleOutline />
      </div>
    </ListItem>
  );
};

/*
  많은 양의 데이터가 추가되었을 때 바뀐 항목외 다른 항목은 리렌더링되지 않게 하기위해서 React.memo 함수를 사용하였다.
  이는 컴포넌트의 props가 바뀌지 않았다면, 리렌더링 되지 않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화해 줄 수 있다.
  이제 TodoListItem 컴포넌트는 todo, onDelete, onToggle이 바뀌지 않으면 리렌더링을 하지 않는다.
*/
export default React.memo(TodoListItem);
