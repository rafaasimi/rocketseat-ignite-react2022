import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 18.5rem;
  background-color: ${props => props.theme.blue};
  background-image: url('/bg-cover.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;

  img {
    margin-top: 4rem;
    margin-bottom: 8.375rem;
  }
`