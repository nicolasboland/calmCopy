import styled from "styled-components";

export const ContainerContact = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.lynxWhite};
  min-height: 20vh;
  display: flex;
  padding-bottom: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 5%;
    @media ${props => props.theme.devices.mobile} {
      display: flex;
      flex-direction: column;
    }
`

export const ContainerBoxContact = styled.div`
  padding-top: 2rem;
  display: flex;
  width: 18rem;
  flex-direction: column;
  align-items: center;
`