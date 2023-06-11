import { styled } from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
`;

export const CardIssue = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const IssueContent = styled.div`
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 0.5rem;

    &:last-child {
      margin: 0;
    }
  }

  pre {
    padding: 1rem;
    background: ${(props) => props.theme['base-post']};
    border-radius: 2px;
    margin: 2rem 0;
  }

  img {
    max-width: 100%;
    margin: 2rem 0 2rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    position: relative;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    line-height: 140%;
    margin-bottom: 1.25rem;

    &:hover::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.blue};
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;

export const CardTitle = styled.div`
  margin-bottom: 0.5rem;

  strong {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 140%;
    color: ${(props) => props.theme['base-title']};
  }
`;

export const CardStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};
  }
`;
