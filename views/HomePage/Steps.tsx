// TypebotComponent
import { open as openTypebot} from '@typebot.io/js';

// Next and react Imports
import NextImage from 'next/image';
import styled from 'styled-components';

// Components
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';

// Utils
import { media } from 'utils/media';

export default function Steps() {
  return (
    <StepsWrapper>
      <Contents>
        <CustomOverTitle>Geração forte quadrangular região 513</CustomOverTitle>
        <Heading>ACAMP GFQ 2024 STEPS</Heading>
        <Description>
          Prepare-se para quatro dias incríveis de louvor, adoração, ensinamentos poderosos e muita diversão! Junte-se a nós e faça parte dessa experiência transformadora!
        </Description>
        <CustomButtonGroup>
          <Button mainButton onClick={() => openTypebot()}>
            Faça sua inscrição <span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <NextImage src="/logos/steps/steps-logo.png" alt="steps-logo" width={500} height={500} />
      </ImageContainer>
    </StepsWrapper>
  );
}

const StepsWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 4rem;
    justify-content: center;
    max-width: 50%;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  ::before {
    background-color: var(--darkGreenColor);
  }
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
