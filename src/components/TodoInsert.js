import React, { useState, useCallback, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import { Insert } from './style/Style';

const TodoInsert = ({ onInsert }) => {
  const inputEl = useRef(null);
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

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
