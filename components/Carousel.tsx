import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { SingleArticle } from 'types';
import { media } from 'utils/media';


export interface CarouselProps {
    title: string;
    items: SingleArticle[];
}

export function Carousel({ title, items }: CarouselProps) {
    const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();
    const oneItemWidth = 350;
    const noOfItems = width / oneItemWidth;
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <CarouselContainer>
        <Container>
            <Content>
            <OverTitle>LOCAL</OverTitle>
            <SectionTitle>{title}</SectionTitle>
            </Content>
        </Container>

        <SwiperContainer ref={ref}>
            {hasMounted && (
            <Swiper modules={[A11y]} slidesPerView={noOfItems} spaceBetween={10} loop>
                {items.map((article) => (
                <SwiperSlide key={article.title}>
                    <ArticleCard imageUrl={article.imageUrl} />
                </SwiperSlide>
                ))}
            </Swiper>
            )}
        </SwiperContainer>
        </CarouselContainer>
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

const CarouselContainer = styled.div`
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
