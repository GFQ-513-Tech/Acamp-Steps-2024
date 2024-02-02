import styled from 'styled-components';
import { Carousel } from 'components/Carousel';
import { SingleArticle } from 'types';


interface ScrollablePhotoGalleryProps {
  hotelPhotoGallery: SingleArticle[];
  memoriesPhotoGallery: SingleArticle[];
}

export default function ScrollablePhotoGallery({
  hotelPhotoGallery,
  memoriesPhotoGallery,
}: ScrollablePhotoGalleryProps) {
  return (
    <Section>
      <Carousel title="Hotel Fazenda Terra Verde" items={hotelPhotoGallery} />
      <Carousel title="Acamp Deeper 2023" items={memoriesPhotoGallery} />
    </Section>
  );
}

const Section = styled.section`
  background-color: var(--salmonColor);
  background-image: url('/abstract-elements/background-clear.webp');
  display: flex;
  flex-direction: column;
  padding: 10rem 0 0 0;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`