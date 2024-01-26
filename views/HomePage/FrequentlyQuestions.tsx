import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import FaqSection from 'views/HomePage/FaqSection';

export default function FrequentlyQuestions() {
  return (
    <FrequentlyQuestionsWrapper id="frequentlyQuestions">
      <Content>
        <OverTitle>Dúvidas</OverTitle>
        <SectionTitle>Dúvidas Frequentes</SectionTitle>
      </Content>
      <FaqSection />
    </FrequentlyQuestionsWrapper>
  );
}

const FrequentlyQuestionsWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;