// 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트

import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import { ListItem, TodoListItemVirtualized } from './ListItemStyle';

const TodoListItem = ({ todo, onDelete, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <TodoListItemVirtualized>
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
export default React.memo(TodoListItem);
