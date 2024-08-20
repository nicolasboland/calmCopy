import styled from "styled-components";
import { IconStyledProps } from "./types"

export const IconStyles = styled.div<IconStyledProps>`
    * {
    width: ${({ $width }) => `${$width}`};
    height: ${({ $height }) => `${$height}`};
    }
  padding: ${props => props.$padding ? props.$padding : "0px"};

  @media ${props=>props.theme.devices.mobile}{
    * {
    width: ${({ $responsiveMobile }) => $responsiveMobile && `${$responsiveMobile.width}`};
    height: ${({ $responsiveMobile }) => $responsiveMobile && `${$responsiveMobile.height}`};
    }
  }   

`;