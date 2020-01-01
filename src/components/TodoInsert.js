// 새로운 항목을 입력하고 추가
import React, { useState, useCallback, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import { Insert } from './style/Style';

const TodoInsert = ({ onInsert }) => {
  const inputEl = useRef(null);
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  /*
  onSubmit 대신 onClick을 버튼에 줘도 정상적으로 작동하지만
  Submit은 Input에서 Enter 키를 눌렀을 때도 반응을 한다.

  하지만 onSubmit은 사용한 뒤 새로고침이 발생하기 때문에 이를 조치하기 위해서
  e.preventDefault() 함수를 사용한다. 
*/

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');

      e.preventDefault();
      inputEl.current.focus();
    },
    [onInsert, value],
  );

  return (
    <Insert onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        ref={inputEl}
      />

      <button type="submit">
        <MdAdd />
      </button>
    </Insert>
  );
};

export default TodoInsert;
