import { styled } from "styled-components"

export const ContainerGuiaVehiculo = styled.div`
  text-align: center;
  `

  export const ContainerTitle = styled.div`
  padding: 3% 0;
  background-color: ${(props) => props.theme.colors.lynxWhite};
`

export const ContainerImgs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.devices.biggerMobile} {
    flex-direction: column;
  }
`
export const ImageDiv = styled.div`
  max-width: 90vw;
  max-height: 80vh;
  cursor: pointer;
  @media ${(props) => props.theme.devices.mobile} {
    max-width: 90%;
    max-height: 100%;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`

export const FullscreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const FullscreenImgVehiculos = styled.img`
  max-width: 95%;
  max-height: 90%;
  @media ${(props) => props.theme.devices.biggerMobile} {
    width: 50%;
    height: 85%;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 70%;
    height: 80%;
  }
`
