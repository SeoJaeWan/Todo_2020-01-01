// todos 배열을 props로 받아 온 후, 화면에 출력
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './style/TodoList.css';

const TodoList = ({ todos, onDelete, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onDelete={onDelete}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onDelete, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      autoWidth={true}
      width={630}
      height={650}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
