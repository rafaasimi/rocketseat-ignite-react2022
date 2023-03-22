import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: flex-end;
  gap: 6.375rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-500']};
    margin-bottom: 0.25rem;
  }

  & > p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
  }

  & > div {
    flex: 1;
  }
`

export const OrderInfo = styled.div`
  margin-top: 2.5rem;

  & > div {
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: linear-gradient(
          ${(props) => props.theme['gray-100']},
          ${(props) => props.theme['gray-100']}
        )
        padding-box,
      linear-gradient(
          to right,
          ${(props) => props.theme['yellow-300']},
          ${(props) => props.theme['purple-300']}
        )
        border-box;
    border: 1px solid transparent;

    div + div {
      margin-top: 2rem;
    }
  }
`

const INFO_ITEM_COLOR = {
  'purple-300': 'purple-300',
  'yellow-300': 'yellow-300',
  'yellow-500': 'yellow-500',
} as const

interface OrderInfoItemProps {
  iconColor: keyof typeof INFO_ITEM_COLOR
}

export const OrderInfoItem = styled.div<OrderInfoItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme[INFO_ITEM_COLOR[props.iconColor]]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  span {
    color: ${(props) => props.theme['gray-700']};
    line-height: 1.3;
  }
`
