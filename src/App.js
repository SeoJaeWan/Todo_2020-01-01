import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulktodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}
/*
  useState() 안에 함수 createBulktodos()를 넣을때
  useState(createBulktodos()); 이렇게 입력하면 리렌더링될 때마다 createBulktodos 함수가 호출되지만,
  useState(createBulktodos); 이렇게 입력하면 컴포넌트가 처음 렌더링될 때만 함수가 실행된다.
*/
const App = () => {
  const [todos, setTodos] = useState(createBulktodos);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: todos.length,
        text,
        checked: false,
      };

      setTodos(todos => todos.concat(todo));
    },
    [todos],
  );

  const onDelete = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
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
