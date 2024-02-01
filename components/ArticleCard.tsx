
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Spinner from './Spinner';


export interface ArticleCardProps {
  imageUrl: string;
}

export default function ArticleCard({ imageUrl }: ArticleCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <ArticleCardWrapper className="article-card-wrapper">
      <HoverEffectContainer>
        {!imageLoaded && (
          <ImageContainer>
            <SpinnerWrapper>
              <Spinner color="var(--white)" size={50} thickness={6} />
            </SpinnerWrapper>
          </ImageContainer>
        )}
        <ImageContainer style={{ display: imageLoaded ? 'block' : 'none' }}>
          <NextImage src={imageUrl} layout="fill" objectFit="cover" />
        </ImageContainer>
      </HoverEffectContainer>
    </ArticleCardWrapper>
  );
}

const ArticleCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.6rem;
  cursor: pointer;
  color: var(--textDark);
`;

const HoverEffectContainer = styled.div`
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    border-radius: 0.6rem;
    overflow: hidden;
    transform: scale(1.025);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 30rem;
  background-color: rgba(31, 67, 46, 0.5);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  background-color: rgba(31, 67, 46, 0.5);
  justify-content: center;
  align-items: center;
  justify-self: center;
`;
