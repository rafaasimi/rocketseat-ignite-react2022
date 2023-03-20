import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};
  font-size: 0.875rem;
  line-height: 1.3;

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const CartButton = styled.div`
  position: relative;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-100']};
  border-radius: 6px;
  line-height: 0;

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme['yellow-500']};
    border-radius: 50%;
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: initial;
  }
`
