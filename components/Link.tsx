import Link from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface LinkProps {
  href: string;
}

export default function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return (
    <Link legacyBehavior href={href} passHref>
      <Anchor>{children}</Anchor>
    </Link>
  );
}

const Anchor = styled.a`
  display: inline;
  width: fit-content;
  text-decoration: none;

  background: linear-gradient(rgb(var(--primary)), rgb(var(--primary)));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% 0px;
  transition: 100ms;
  transition-property: background-size, text-decoration, color;
  color: var(--darkGreenColor);

  &:hover {
    background-size: 100% 100%;
    text-decoration: none;
    color: var(--darkBlueColor));
  }

  &:active {
    color: var(--darkBlueColor));
    background-size: 100% 100%;
  }
`;
