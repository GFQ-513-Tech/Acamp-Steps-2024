// Next and react Imports
import Head from 'next/head';
import styled from 'styled-components';

// Components
import BasicSection from 'components/BasicSection';
import TypebotComponent from 'components/Typebot';

// Env
import { EnvVars } from 'env';

// Photo Gallery Files
import hotelPhotoGallery from 'public/homepage-content/photo-gallery/hotelPhotoGallery.json';
import memoriesPhotoGallery from 'public/homepage-content/photo-gallery/memoriesPhotoGallery.json';
import { media } from 'utils/media';

// Views Components of Index Page
import Cta from 'views/HomePage/Cta';
import FrequentlyQuestions from 'views/HomePage/FrequentlyQuestions';
import Partners from 'views/HomePage/Partners';
import ScrollablePhotoGallery from 'views/HomePage/ScrollablePhotoGallery';
import Steps from 'views/HomePage/Steps';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="Acamp Steps 2024 - User View"
          content="Acampamento de Jovens Steps 2024 da Igreja Quadrangular Região 513 - São Carlos/SP"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Steps />
          <Partners />
          <Line id="acamp2024" />
          <BasicSection imageUrl="/homepage-content/presentation-section/first-image.svg" title="O que esperar?" overTitle="Acamp 2024">
            <p>
              Se você está em busca de inspiração, conexão e uma experiência inesquecível, você está no lugar certo. Este não é apenas um acampamento; é uma jornada de fé, amizade e crescimento. Junte-se a nós enquanto celebramos a juventude, exploramos a Palavra e construímos memórias que durarão para toda a vida!
            </p>
          </BasicSection>
          <BasicSection imageUrl="/homepage-content/presentation-section/second-image.svg" title="Nossa Programação" overTitle="Acamp 2024" reversed>
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
          <ScrollablePhotoGallery hotelPhotoGallery={hotelPhotoGallery} memoriesPhotoGallery={memoriesPhotoGallery} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
      <TypebotComponent />
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
  background-color: var(--salmonColor);
  background-image: url('/abstract-elements/background-clear.webp');
  background-size: cover;
  padding-top: 5rem;
  padding-bottom: 5rem;

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