import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Insert } from './InsetStyle';

const TodoInsert = ({ value, onChange, onSubmit }) => {
  return (
    <Insert onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />

      <button type="submit">
        <MdAdd />
      </button>
    </Insert>
  );
};

export default TodoInsert;
