// Next and react Imports
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Components
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { SingleArticle } from 'types';
import { media } from 'utils/media';

interface ScrollablePhotoGalleryProps {
  hotelPhotoGallery: SingleArticle[];
  memoriesPhotoGallery: SingleArticle[];
}

export default function ScrollablePhotoGallery({ hotelPhotoGallery, memoriesPhotoGallery }: ScrollablePhotoGalleryProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const oneItemWidth = 350;
  const noOfItems = width / oneItemWidth;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Section>
      <Container>
        <Content>
          <OverTitle>LOCAL</OverTitle>
          <SectionTitle>Hotel Fazenda Terra Verde</SectionTitle>
        </Content>
      </Container>

      <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper modules={[A11y]} slidesPerView={noOfItems} spaceBetween={10} loop>
            {hotelPhotoGallery.map((article) => (
              <SwiperSlide key={article.title}>
                <ArticleCard
                  imageUrl={article.imageUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperContainer>

      <Container>
        <Content>
          <OverTitle>LEMBRANÇAS</OverTitle>
          <SectionTitle>Acamp Deeper 2023</SectionTitle>
        </Content>
      </Container>

      <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper modules={[A11y]} slidesPerView={noOfItems} spaceBetween={10} loop>
            {memoriesPhotoGallery.map((article) => (
              <SwiperSlide key={article.title}>
                <ArticleCard
                  imageUrl={article.imageUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperContainer>
    </Section>
  );
}

const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Section = styled.section`
  background-image: url('/abstract-elements/background-clear.png');
  display: flex;
  flex-direction: column;
  padding: 10rem 0 0 0;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 250em;
  height: 46rem;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;
