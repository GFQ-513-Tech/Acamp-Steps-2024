import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import TypebotComponent from 'components/Typebot';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import Cta from 'views/HomePage/Cta';
import FrequentlyQuestions from 'views/HomePage/FrequentlyQuestions';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          //#TODO: Change this description
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          {/* <TypebotComponent /> */}
          <Hero />
          <Partners />
          <Line id="acamp2024" />
          <BasicSection imageUrl="/home-content/first-image.svg" title="O que esperar?" overTitle="Acamp 2024">
            <p>
              Se você está em busca de inspiração, conexão e uma experiência inesquecível, você está no lugar certo. Este não é apenas um acampamento; é uma jornada de fé, amizade e crescimento. Junte-se a nós enquanto celebramos a juventude, exploramos a Palavra e construímos memórias que durarão para toda a vida!
            </p>
          </BasicSection>
          <BasicSection imageUrl="/home-content/second-image.svg" title="Nossa Programação" overTitle="Acamp 2024" reversed>
            <p>
              O Acamp GFQ 2024 (Steps) acontecerá entre os dias 10 e 13 de Fevereiro  no Hotel Fazenda Terra Verde localizado entre São Carlos e Analândia. Junte-se a nós para um fim de semana que vai superar suas expectativas, fortalecer sua fé e criar laços duradouros. 
            </p>
            <br />
            <p>
              <strong>Inscreva-se agora e faça parte desta experiência transformadora!</strong>
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FrequentlyQuestions />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const Line = styled.hr`
  border: 0;
  height: 2px;
  background: var(--darkGreenColor);
  margin: 0 80px;
`;

const HomepageWrapper = styled.div`
  & > :last-child {
    padding-bottom: 10rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: var(--darkBlueColor);

  & > *:not(:first-child) {
    margin-top: 10rem;
  }

  ${media('<=desktop')} {
    & > *:not(:first-child) {
      margin-top: 6rem;
    }
  }
`;

const WhiteBackgroundContainer = styled.div`
  background-image: url('/abstract-elements/background-clear.png');
  background-size: cover;
  padding-top: 5rem;

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }

  ${media('<=desktop')} {
    padding-top: 5rem;
    & > *:not(:first-child) {
      margin-top: 6rem;
    }
  }
`;