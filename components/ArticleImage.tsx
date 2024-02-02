import Image, { ImageProps } from "next/image";
import React from 'react';
import styled from 'styled-components';

type ArticleImageProps = ImageProps;

export default function ArticleImage({ src, alt, ...rest }: ArticleImageProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={src}
          alt={alt || 'Article Image'}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkj6+vBwAC4AFuNSmtGAAAAABJRU5ErkJggg=="
          layout="fill"
          objectFit="cover"
          {...rest}
        />
      </ImageWrapper>
      <Caption>{alt}</Caption> {/* "alt" variable name was "caption" before, maybe before it was more readable*/}
    </Wrapper>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  max-width: 90rem;
  border-radius: 0.6rem;
  overflow: hidden;

  &::before {
    float: left;
    padding-top: 56.25%;
    content: '';
  }

  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Caption = styled.small`
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;
`;
