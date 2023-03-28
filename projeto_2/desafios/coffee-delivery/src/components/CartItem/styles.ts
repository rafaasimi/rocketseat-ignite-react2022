import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    gap: 1.25rem;
  }

  .price {
    span {
      color: ${(props) => props.theme['gray-700']};
      font-weight: bold;
    }
  }
`

export const ItemControls = styled.div`
  p {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  .controls-container {
    display: flex;
    align-items: stretch;
    gap: 0.5rem;

    .controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      padding: 0.5rem;
      background: ${(props) => props.theme['gray-300']};
      border-radius: 6px;

      button {
        color: ${(props) => props.theme['purple-300']};
        line-height: 0;
        border: none;
        background: transparent;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme['purple-500']};
        }
      }

      input {
        max-width: 30px;
        border: none;
        background: transparent;
        text-align: center;

        &:focus {
          background: inherit;
          outline: none;
        }
      }
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      font-size: 0.75rem;
      line-height: 1.6;
      text-transform: uppercase;

      color: ${(props) => props.theme['gray-700']};
      background: ${(props) => props.theme['gray-400']};
      padding: 0.5rem;
      border-radius: 6px;
      border: none;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['gray-800']};
        background: ${(props) => props.theme['gray-500']};
      }

      svg {
        color: ${(props) => props.theme['purple-300']};
      }
    }
  }
`
