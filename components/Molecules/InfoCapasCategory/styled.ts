import styled from "styled-components";

export const Container = styled.div`
`

export const ImagesContainer = styled.div<{ $isOriginal?: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 320px;
  border-radius: 16px;
  border: 1px solid var(--Escala-Secundario-1-Gris-4, #EDEDED);
  padding: ${props => props.$isOriginal ? "30px" : "50px 30px 10px 30px"};
  margin: 7px;

  @media ${props=>props.theme.devices.middleResolutionDesktop} {
    height: 450px;
    padding: ${props => props.$isOriginal ? "50px" : "80px 60px 60px 60px"};
  }

  @media ${props=>props.theme.devices.mobile} {
    height: 240px;
    padding: ${props => props.$isOriginal ? "30px 10px 20px 10px" : "30px 10px 0px 10px"};
  }

  @media ${props=>props.theme.devices.smallTablet} {
    height: 150px;
  }
`

export const ImagesPosition = styled.div<{ $index: number, $isOriginal?: boolean}>`
  z-index: ${props => props.$index};
  margin-top: ${props => props.$isOriginal ? "5px" : "-30px"};

  @media ${props=>props.theme.devices.mobile} {
    margin-top: ${props => props.$isOriginal ? "-5px" : "-15px"};
  }
`

export const Specs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;
`