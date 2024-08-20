import styled from "styled-components"

export const DivCancel = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.devices.mobile} {
    flex-direction: column;
  }
`

export const DivImagen = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`

export const DivText = styled.div`
  p {
    width: fit-content;
  }
`

export const ContactText = styled.div`
  display: flex;
`
