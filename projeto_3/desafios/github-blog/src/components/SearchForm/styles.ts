import { styled } from 'styled-components';

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;
`;

export const SearchFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  p {
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 140%;
    color: ${(porps) => porps.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(porps) => porps.theme['base-span']};
  }
`;

export const FormContainer = styled.form`
  input {
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(porps) => porps.theme['base-border']};
    color: ${(porps) => porps.theme['base-text']};

    &::placeholder {
      font-size: 1rem;
      color: ${(porps) => porps.theme['base-label']};
    }

    &:focus {
      outline: none;
    }
  }
`;
