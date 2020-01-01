import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: todos.length,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
      console.log(todos.length);
    },
    [todos],
  );

  const onDelete = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
