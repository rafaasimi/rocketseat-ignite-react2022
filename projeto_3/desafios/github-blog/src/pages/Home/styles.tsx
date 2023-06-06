import { styled } from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const CardProfile = styled.div`
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 2rem;
`;

export const CardProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
`;

export const CardProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  #title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    strong {
      color: ${props => props.theme['base-title']};
      font-weight: bold;
      font-size: 1.5rem;
    }

    a {
      position: relative;
      text-transform: uppercase;
      color: ${props => props.theme.blue};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      line-height: 140%;

      &:hover::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${props => props.theme.blue};
      }

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }

  #description {
    height: 100%;
    
    span {
      color: ${props => props.theme['base-text']};
      font-size: 1rem;
    }
   }

  #status {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${props => props.theme['base-subtitle']};
      font-size: 1rem;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`
