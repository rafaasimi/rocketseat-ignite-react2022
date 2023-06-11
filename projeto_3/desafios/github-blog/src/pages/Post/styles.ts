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
    background: ${props => props.theme['base-post']};
    border-radius: 2px;
    margin: 2rem 0;
  }
`;
