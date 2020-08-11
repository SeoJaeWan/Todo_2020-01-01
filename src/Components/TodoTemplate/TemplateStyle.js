import styled, { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 630,
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

  position: fixed;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  ${media.tablet`width: 100%;`}

  border-radius: 4px;

  .app-title {
    background: #396c67;
    color: #fff;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
