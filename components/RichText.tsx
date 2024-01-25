import styled from 'styled-components';
import { media } from 'utils/media';

const RichText = styled.div`
  font-size: 1.8rem;
  opacity: 0.9;
  line-height: 1.6;

  &.no-opacity a{
    font-weight: bold;
    color: var(--orangeNormalColor);
  }

  ol,
  ul {
    list-style: none;
    padding: 0rem;

    li {
      padding-left: 2rem;
      position: relative;

      & > * {
        display: inline-block;
        vertical-align: top;
      }

      &::before {
        position: absolute;
        content: 'L';
        left: 0;
        top: 0;
        text-align: center;
        color: var(--darkGreenColor);
        font-family: arial;
        transform: scaleX(-1) rotate(-35deg);
      }
    }
  }

  table {
    border-collapse: collapse;

    table-layout: fixed;
    border-spacing: 0;
    border-radius: 5px;
    border-collapse: separate;
  }
  th {
    background: var(--textLight);
  }

  th,
  td {
    border: 1px solid var(--textLight);
    padding: 1rem;
  }

  tr:nth-child(even) {
    background: var(--textLight);
  }

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

export default RichText;
