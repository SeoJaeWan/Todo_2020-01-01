import styled from 'styled-components';

export const ListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  .checkBox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      /* 아이콘 */
      font-size: 1.5rem;
    }

    .text {
      margin-left: 0.5rem;
      flex: 1;
    }

    /* 체크되었을 때 보여 줄 스타일 ( 조건부 스타일링 )*/
    &.checked {
      svg {
        color: #22b8cf;
      }

      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;

    &:hover {
      color: #ff8787;
    }
  }
`;

export const TodoListItemVirtualized = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }

  &:nth-child(even) {
    background: #f8f9fa;
  }
`;
