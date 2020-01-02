import React, { useState, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
/*
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
  useState() 안에 함수 createBulktodos()를 넣을때
  useState(createBulktodos()); 이렇게 입력하면 리렌더링될 때마다 createBulktodos 함수가 호출되지만,
  useState(createBulktodos); 이렇게 입력하면 컴포넌트가 처음 렌더링될 때만 함수가 실행된다.

  TodoListItem에서 React.memo를 사용하고도 todos 배열이 업데이트되면 onDelete와 onToggle 함수도 계속 바뀐다.
  그 이유는 두 함수는 업데이트 과정에서 최신 상태의 todos를 참조하기 때문이다. 즉 todos배열이 바뀔때마다 새로 만들어 진다는 뜻이다.

  이를 해결하는 첫번째 방법은 useState의 함수형 업데이트 기능을 사용하는 것이고 두번째 방법은 useReducer를 사용하는 것이다.
  
  먼저 함수형 업데이트 기능은 
  setTodos()를 사용할 때 setTodos(todos.concat(todo)); 이렇게 사용하지 말고 
  setTodos(todos => todos.concat(todos)) 이렇게 사용하는 것이다.

  위처럼 기존 데이터를 수정할 때 직접 수정하는 것이 아닌, 새로운 배열을 만든 다음에 새로운 객체를 만들어 필요한 부분을 교체해주는 방식이 
  '불변성을 지킨다' 라고 한다.

  const todos = [{ id: 1, checked: true, text: "후후" }];
  const nextTodos = [...todos];

  const test = () => {
    console.log(nextTodos[0] === todos[0]);
    console.log(nextTodos[0]);
    console.log(todos[0]);

    nextTodos[0].checked = false;

    console.log(nextTodos[0] === todos[0]);
    console.log(nextTodos[0]);
    console.log(todos[0]);

    nextTodos[0] = {
      ...nextTodos[0],
      checked: false
    };

    console.log(nextTodos[0] === todos[0]);
    console.log(nextTodos[0]);
    console.log(todos[0]);
  };

  위와같이 테스트를 했을 때 처음과 2번째는 모두 console.log(nextTodos[0] === todos[0]);가 true가 나온다.
  이는 같은 객체를 가리키고 있기 떄문이고 
  3번째는 false가 나오는데 nextTodos[0]에 새로운 객체를 할당해주기 떄문이다.
*/
const App = () => {
  //  const [todos, setTodos] = useState(createBulktodos);
  const [todos, setTodos] = useState([]);

  const onInsert = useCallback(text => {
    const todo = {
      id: window.performance.now(),
      text,
      checked: false,
    };
    setTodos(todos => todos.concat(todo));
  }, []);

  const onDelete = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
