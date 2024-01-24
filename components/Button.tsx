import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{ transparent?: boolean; mainButton?: boolean }>;

const Button = styled.a<ButtonProps>`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: ${(p) => (p.transparent ? 'transparent' : p.mainButton ? 'var(--darkGreenColor)' : 'var(--salmonColor)')};
  padding: 1.75rem 2.25rem;
  font-size: 1.2rem;
  color: ${(p) => (p.transparent ? 'var(--textLight)' : p.mainButton ? 'var(--textLight)' : 'var(--textDark)')};
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border: ${(p) => (p.transparent ? 'none' : p.mainButton ? 'var(--darkGreenColor)' : 'var(--salmonColor)')};
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  span {
    margin-left: 2rem;
  }

  &:hover {
    transform: scale(1.025);
  }
`;

export default Button;
