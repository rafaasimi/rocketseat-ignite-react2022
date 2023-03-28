import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2.5rem;
`

export const CartForm = styled.div`
  flex: 1.4;

  h2 {
    font-size: 1.125rem;
    line-height: 1.3;
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 1rem;
  }
`

export const PaymentAddress = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-bottom: 0.75rem;

  .address-info {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;

    p {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-900']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-700']};
    }

    svg {
      color: ${(props) => props.theme['yellow-500']};
    }
  }

  .address-input {
    input {
      width: 100%;
      padding: 0.75rem;
      border-radius: 4px;
      color: ${(props) => props.theme['gray-700']};
      border: 1px solid ${(props) => props.theme['gray-400']};
      background: ${(props) => props.theme['gray-300']};
      font-size: 0.875rem;
      line-height: 1.3;
      outline: none;

      &:focus {
        border: 1px solid ${(props) => props.theme['yellow-500']};
      }

      &::placeholder {
        color: ${(props) => props.theme['gray-600']};
      }
    }

    #cep {
      grid-area: cep;
    }

    #rua {
      grid-area: rua;
    }

    #numero {
      grid-area: numero;
    }

    #complemento {
      position: relative;
      grid-area: complemento;

      input {
        width: 100%;
        padding-right: 70px;
      }

      ::after {
        display: block;
        position: absolute;
        content: 'Opcional';
        font-style: italic;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.75rem;
        color: ${(props) => props.theme['gray-600']};
      }
    }

    #bairro {
      grid-area: bairro;
    }

    #cidade {
      grid-area: cidade;
    }

    #uf {
      grid-area: uf;
    }

    display: grid;
    grid-gap: 1rem;
    grid-template-areas:
      'cep cep . . . .'
      'rua rua rua rua rua rua'
      'numero numero complemento complemento complemento complemento'
      'bairro bairro cidade cidade cidade uf';
  }
`

export const PaymentType = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;

  .payment-info {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;

    p {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-900']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-700']};
    }

    svg {
      color: ${(props) => props.theme['purple-300']};
    }
  }

  .payment-input {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    input[type='radio'] {
      position: absolute;
      visibility: hidden;

      &:checked + label {
        border: 1px solid ${(props) => props.theme['purple-300']};
        background: ${(props) => props.theme['purple-100']};
      }
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;

      border: 1px solid transparent;
      border-radius: 6px;
      padding: 1rem;
      color: ${(props) => props.theme['gray-700']};
      background: ${(props) => props.theme['gray-400']};
      text-transform: uppercase;

      font-size: 0.75rem;
      line-height: 1.6;

      &:hover {
        background: ${(props) => props.theme['gray-500']};
      }

      svg {
        color: ${(props) => props.theme['purple-300']};
      }
    }
  }
`

export const CartList = styled.div`
  flex: 1;

  h2 {
    font-size: 1.125rem;
    line-height: 1.3;
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 1rem;
  }
`

export const CartContent = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  .cart-info {
    margin-bottom: 1.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme['gray-700']};
      }
    }

    div + div {
      margin-top: 0.75rem;
    }

    div.total {
      span {
        color: ${(props) => props.theme['gray-800']};
        font-weight: bold;
        font-size: 1.25rem;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
`

export const ConfirmOrder = styled.button`
  width: 100%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-300']};
  padding: 0.75rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-500']};
  }
`
