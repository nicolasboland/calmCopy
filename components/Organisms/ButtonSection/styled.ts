import styled from "styled-components";

export const Container = styled.section<{$imageDesktop: string, $imageMobile: string, $isHotsale?: boolean}>`
  position: relative;
  background-image: ${({ $imageDesktop }) => $imageDesktop && `url(${$imageDesktop})`}; 
  transition: all 0.5s;
  background-position: center center;
  background-repeat: no-repeat;
  ${props => !props.$isHotsale && "background-size: cover;"}
  min-height: 400px;
  display: flex;
  justify-content: center;
  margin: 3rem 0;

  @media ${props=>props.theme.devices.bigResolutionDesktop}{
    background-size: cover;
  }

  @media ${props=>props.theme.devices.mobile}{
    min-height: ${props => props.$isHotsale ? "300px" : "200px" };
    background-image: ${({ $imageMobile }) => $imageMobile && `url(${$imageMobile})`}; 
    transition: all 0.5s;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`
export const ContainerSleep = styled.section<{$imageDesktop: string, $imageMobile: string}>`
background-image: ${({ $imageDesktop }) => $imageDesktop && `url(${$imageDesktop})`}; 
min-height: 450px;
background-position: center center;
background-size: cover;
display: flex;
align-items: center;
justify-content: flex-start;
margin: 3rem 0;

@media ${props=>props.theme.devices.mobile}{

background-position: 100% 0;}


`
export const DivTextButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const DivTitleButton = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 20px;
padding-left: 20%;

@media ${props=>props.theme.devices.mobile}{
  gap: 20px;
}
`;

export const Degrade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10.931px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8));
  pointer-events: none;
`