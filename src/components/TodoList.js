// todos 배열을 props로 받아 온 후, 화면에 출력
import React from 'react';
import { List } from './style/Style';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
};

export default TodoList;
