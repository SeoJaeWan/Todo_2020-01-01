// todos 배열을 props로 받아 온 후, 화면에 출력
import React from 'react';
import { List } from './ListStyle';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
};

export default React.memo(TodoList);
