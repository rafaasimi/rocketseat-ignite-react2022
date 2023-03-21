import styled from 'styled-components'

import bgBannerImg from '../../assets/bg-banner.svg'

export const MainBanner = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${bgBannerImg});
    background-size: cover;
    z-index: -1;
    filter: blur(50px);
  }
`

export const MainBannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.5rem;
  padding: 6rem 0;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-900']};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const MainBannerItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  margin-top: 4.125rem;

  grid-row-gap: 1.25rem;
  grid-column-gap: 2.5rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  div > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }

  div > span {
    color: ${(props) => props.theme['gray-700']};
    line-height: 1.3;
  }

  div:nth-child(1) > div {
    background: ${(props) => props.theme['yellow-500']};
  }

  div:nth-child(2) > div {
    background: ${(props) => props.theme['gray-700']};
  }

  div:nth-child(3) > div {
    background: ${(props) => props.theme['yellow-300']};
  }

  div:nth-child(4) > div {
    background: ${(props) => props.theme['purple-300']};
  }
`
