import styled from "styled-components"
import { theme } from "@/utils/Theme"

export const Gallery = styled.section<{ $isRenderSelected?: boolean }>`
  display: ${props => props.$isRenderSelected ? "none" : "block"};
  z-index: 0;
  position: relative;
  cursor: pointer;

  .thumb {
    width: 135px !important;
    border: none !important;
    transition: all 0.1s;

    &:hover {
      opacity: 0.75;
      cursor: pointer;
    }
  }
  .thumb.selected {
    outline: 5px solid rgba(255, 255, 255, 0.75);
    outline-offset: -5px;
    border: none !important;
  }

  .control-dots {
    display: flex;
    justify-content: center;
  }

  .slider-wrapper {
    border-radius: 10px;

    @media ${theme.devices.mobile} {
      border-radius: 0px;
  }
  }
`

export const DivImgRender3D = styled.div`
  display: flex;
  flex-direction: column;
  width: 2.5rem;
  height: 5srem;
  position: absolute;
  bottom: 7%;
  right: 1rem;
  z-index: 10;
  background-color: ${theme.colors.ZZBPearl};
  border-radius: 50%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  @media ${theme.devices.biggerMobile} {
    width: 1.5rem;
    height: 3rem;
    bottom: 12%;

    svg {
      width: 15px;
    }
  }

  @media ${theme.devices.mobile} {
    width: 2.5rem;
    height: 5rem;
    bottom: 7.5%;

    svg {
      width: 20px;
    }
  }
`

export const DivImgRender3DUp = styled.div<{ $isSelected?: boolean }>`
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.colors.steam : theme.colors.ZZBPearl};
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 50% 50% 0 0;

  @media ${theme.devices.biggerMobile} {
    padding: 4px 8px;
  }

  @media ${theme.devices.mobile} {
    padding: 8px 10px;
  }
`

export const DivImgRender3DDown = styled.div<{ $isSelected?: boolean }>`
  padding: 8px 10px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.colors.steam : theme.colors.ZZBPearl};
  cursor: pointer;
  border-radius: 0 0 50% 50%;

  @media ${theme.devices.biggerMobile} {
    padding: 4px 8px;
  }

  @media ${theme.devices.mobile} {
    padding: 8px 10px;
  }
`

export const ButtonWrapper = styled.div<{ $isNext?: boolean }>`
  background: ${theme.colors.ZZBPearl};
  position: absolute;
  top: 46.8%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $isNext }) => !$isNext && "left: 0;"}
  ${({ $isNext }) => $isNext && "right: 0;"}
  ${({ $isNext }) => $isNext && "transform: rotate(180deg);"}
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    ${({ $isNext }) =>
      $isNext
        ? "transform: rotate(180deg) translateX(-2px);"
        : "transform: translateX(-2px);"}
  }

  @media ${theme.devices.mobile} {
    display: none;
  }
`

export const PillWrapper = styled.div`
  position: absolute;
  top: .6em;
  left: .4em;

  @media ${theme.devices.mobile} {
    left: .1em;
  }
`;

export const IndicatorWrapper = styled.li<{ $isSelected?: boolean }>`
  display: flex;
  background: ${theme.colors.white};
  align-items: center;
  justify-content: center;
  ${({ $isSelected }) =>
    $isSelected && `background: ${theme.colors.yellowCalm};`}
  width: 2.75rem;
  height: 3px;
  margin: 5% 1%;
  transition: all 0.3s ease-in-out;
`

export const ContainerImagesCarrousel = styled.div`
  max-height: 570px;

  @media ${theme.devices.middleResolutionDesktop} {
    max-height: 570px;
  }
  
  @media ${theme.devices.mobile} {
    max-height: 255px;
  }
`

export const CucardaContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 1%;
  @media ${theme.devices.mobile} {
    left: 8%;
    display: flex;
    justify-content: flex-end;
    top: 5%;
  }
`

export const GaliciaPill = styled.div<{ $isEmpty?: boolean }>`
  position: absolute;
  top: ${props => props.$isEmpty ? "2%" : "20%"};
  left: 1%;
  background-color: ${props => props.theme.colors.blazeOrange};
  padding: 7px 18px;
  border-radius: 275.831px;
  @media ${theme.devices.mobile} {
    left: auto;
    top: 3%;
    right: .5%;
  }
`