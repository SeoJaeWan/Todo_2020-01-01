import React, { useState, useCallback } from 'react';
import TodoTemplate from '../../Components/TodoTemplate';
import TodoList from '../../Components/TodoTemplate/TodoList';
import TodoInsert from '../../Components/TodoTemplate/TodoInset';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const onInsert = useCallback((text) => {
    const todo = {
      id: window.performance.now(),
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
  }, []);

  const onDelete = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <TodoTemplate>
      <TodoInsert
        value={value}
        onInsert={onInsert}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default TodoContainer;
