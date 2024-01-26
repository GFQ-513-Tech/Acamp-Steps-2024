import { open as openTypebot} from '@typebot.io/js';
import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper id="investment">
      <Container>
        <Stack>
          <OverTitle>Inscrições e lotes</OverTitle>
          <SectionTitle>Qual o investimento?</SectionTitle>
          <Description>
            Estamos animados em contar que as inscrições para o Acamp 2024 já estão abertas! Sabemos que investir na sua fé e crescimento pessoal é uma escolha significativa, e queremos tornar isso acessível para todos!
          </Description>
          <Description>
            O investimento inicial para as primeiras <strong>50 vagas é de R$ 250</strong>, uma oportunidade imperdível para garantir seu lugar neste evento inspirador. Mas atenção, à medida que as vagas se esgotam, os lotes vão aumentando em R$ 50. Isso significa que cada lote subsequente terá um investimento um pouco maior. As aberturas de novos lotes serão divulgadas no instagram oficial (@regionalgmj513) e no momento dda inscrição o sistema calculará automaticamente o lote disponível em função da quantidade de inscritos!
          </Description>
          <Description>
            Por isso, fique atento! A contagem regressiva começou, e queremos viver esses momentos incríveis de fé e comunhão com você. Inscreva-se agora antes que as vagas e essa oportunidade única esgotem!  
          </Description>
          <ButtonGroup>
            <NextLink href="#early-access" passHref>
              <Button onClick={() => openTypebot()}>
                Faça a inscrição agora <span>&rarr;</span>
              </Button>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: var(--textLight);
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const CtaWrapper = styled.div`
  background-image: url('/abstract-elements/investment-section.png');
  background-size: cover;
  //background: var(--darkGreenColor);
`;
