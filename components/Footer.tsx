import NextImage from "next/legacy/image";
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

// Components
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterSubtitle = string;
type SingleFooterTitle = string;
type ListFooterInfo = { title: SingleFooterSubtitle ; subtitle: SingleFooterTitle }[];

const footerItems: ListFooterInfo = [
  { title: 'Organização e coordenadoria regional de Jovens', subtitle: 'Wellyngton Marcondes' },
  { title: 'Apoio Região 513', subtitle: 'Rev. José Paulo Boccelli' },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <GridWrapper>
          <NextImage src={'/logos/gfq/gfq-logo-branco.svg'} width={100} height={100}/>
          <ListContainer>
            {footerItems.map((singleItem) => (
              <FooterInfo key={singleItem.title} {...singleItem} />
            ))}
          </ListContainer>
          <NextImage src={'/logos/regiao-513/regiao-513-branco.svg'} width={100} height={100}/>
        </GridWrapper>

        <BottomBar>
          <ShareBar>
            <Link legacyBehavior href="https://www.facebook.com/regionalGMJ513" passHref>
              <SocialIcon
                network="facebook"
                bgColor="white"
                fgColor="var(--darkGreenColor)"
                url="https://www.facebook.com/regionalGMJ513"
              />
            </Link>

            <Link legacyBehavior href="https://www.instagram.com/regionalgmj513/" passHref>
              <SocialIcon
                network="instagram"
                bgColor="white"
                fgColor="var(--darkGreenColor)"
                url="https://www.instagram.com/regionalgmj513/"
              />
            </Link>

            <Link legacyBehavior href="https://www.instagram.com/regionalgmj513/" passHref>
              <SocialIcon
                network="tiktok"
                bgColor="white"
                fgColor="var(--darkGreenColor)"
                url="https://www.tiktok.com/@regionalgmj513"
              />
            </Link>
          </ShareBar>
          <Copyright>&copy; Copyright 2024 - Departamento de Tecnologia GFQ Região 513</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterInfo({ title, subtitle }: { title: string; subtitle: string; }) {
  return (
    <ListWrapper>
      <FooterTitle>{title}</FooterTitle>
      <FooterSubtitle>{subtitle}</FooterSubtitle>
    </ListWrapper>
  );
}

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;

  ${media('<=desktop')} {
    justify-content: center;
    gap: 30px;
  }
`;

const FooterWrapper = styled.div`
  padding-top: 6rem;
  padding-bottom: 2rem;
  background-image: url('/abstract-elements/texture.webp');
  background-color: var(--footerBackgroundColor);
  color: var(--textLight);
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.25rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
  }

  ${media('<=phone')} {
    flex: 0 100%;
  }
`;

const FooterSubtitle = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;

  ${media('<=tablet')} {
    margin-top: 2rem;
  }
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
