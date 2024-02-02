import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

// FIXME: There is some bug here related to transparent and mainbutton types, 
// need to fix some day, this doesn't affect runtime

type ButtonProps = PropsWithChildren<{ transparent?: boolean; mainbutton?: boolean }>;

const Button = styled.span<ButtonProps>`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 1.75rem 2.25rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  /* Conditionally apply styles based on the mainButton prop */
  ${(props: ButtonProps) =>
    props.transparent
      ? css`
          background: transparent;
          color: var(--textLight);
          border: none;
        `
      : props.mainbutton
      ? css`
          background: var(--darkGreenColor);
          color: var(--textLight);
          border: var(--darkGreenColor);
        `
      : css`
          background: var(--orangeNormalColor);
          color: var(--textLight);
          border: var(--orangeNormalColor);
        `};

  span {
    margin-left: 2rem;
  }

  &:hover {
    transform: scale(1.025);
  }
`;

export default Button;
