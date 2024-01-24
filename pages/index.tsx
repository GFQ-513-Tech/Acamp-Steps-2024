import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <Line />
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
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
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
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: var(--darkBlueColor);

  & > *:not(:first-child) {
    margin-top: 15rem;
  }

  ${media('<=desktop')} {
    & > *:not(:first-child) {
      margin-top: 6rem;
    }
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: var(--salmonColor);

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }

  ${media('<=desktop')} {
    & > *:not(:first-child) {
      margin-top: 6rem;
    }
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
