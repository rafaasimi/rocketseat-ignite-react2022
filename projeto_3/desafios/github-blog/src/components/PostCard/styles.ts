import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const PostCardContainer = styled(Link)`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  height: 100%;
  min-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    transition: border 0.2s;
  }
`;

export const PostCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 1rem;

  strong {
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 140%;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`;

export const PostCardDescription = styled.p`
  /* & > * {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: normal;
  } */

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
