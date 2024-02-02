import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Collapse from './Collapse';
import RichText from './RichText';

interface AccordionProps {
  id?: string;
  title: string;
  isOpen?: boolean;
}

export default function Accordion({ id, title, isOpen, children }: PropsWithChildren<AccordionProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;
  return (
    <AccordionWrapper id={id} onClick={() => setHasCollapsed((prev) => !prev)}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon isActive={isActive}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon chakra-accordion__icon css-j2ph2z"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </Icon>
      </TitleWrapper>
      <Collapse isOpen={isActive} duration={300}>
        <Description>
          <RichText className='no-opacity'>{children}</RichText>
        </Description>
      </Collapse>
    </AccordionWrapper>
  );
}

const Title = styled.h3`
  font-size: 2rem;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type IconProps = {
  isActive: boolean;
};

const Icon = styled.div`
  width: 2.4rem;
  transition: transform 0.3s;
  transform: rotateZ(${(props: IconProps) => (props.isActive ? 180 : 0)}deg);
`;

const Description = styled.div`
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: normal;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: var(--defaultCardBackgroundColor);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  ${media('<=desktop')} {
    width: 100%;
  }
`;
