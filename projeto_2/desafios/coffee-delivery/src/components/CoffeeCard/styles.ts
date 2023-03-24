import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme['gray-200']};
  padding: 1.25rem 1.5rem;

  text-align: center;
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: calc(-1.25rem + -21px);
    margin-bottom: 0.75rem;
  }
`
export const TagList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  span {
    text-transform: uppercase;
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-300']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: bold;
  }
`

export const CoffeeInfo = styled.div`
  h3 {
    color: ${(props) => props.theme['gray-800']};
    margin: 1rem 0 0.5rem;
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
  }

  span {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    line-height: 1.3;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export const CoffeeCardControls = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;

  .price {
    white-space: nowrap;
    color: ${(props) => props.theme['gray-700']};
    line-height: 1.3;

    span {
      font-size: 0.875rem;
    }

    strong {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
    }
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

      width: 2.375rem;
      height: 2.375rem;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['purple-500']};
      border-radius: 6px;
      border: none;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme['purple-300']};
      }
    }
  }
`
