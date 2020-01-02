import styled, { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const Template = styled.div`
  /* width가 주어진 상태에서 좌우 정렬 */
  width: 630px;
  margin: 0 auto;
  margin-top: 6rem;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%; margin-top: 0rem;`}
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background: #396c67;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contents {
    background: white;
  }
`;

export const Insert = styled.form`
  display: flex;
  background: #495057;
  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }

    flex: 1;
  }

  button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
      background: #adb5bd;
    }
  }
`;

export const ListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #f8f9fa;
  }

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

  & + & {
    border-top: 1px solid #dee2ed;
  }
`;

export const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;
