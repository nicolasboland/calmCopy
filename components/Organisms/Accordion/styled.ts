import styled from "styled-components";
import {theme} from "@/utils/Theme";

export const DivAccordion = styled.section<{$isProductSS?: boolean, $hasBorder? : boolean}>`
  overflow: hidden;
  width:  ${props => props.$isProductSS ? "100%" : "80%"};
  margin: 10px auto;
  text-align: left;
  border-style: ${props => props.$hasBorder ? "solid" : "none"};
  border-width: 1px;
  border-color: ${theme.colors.explosiveGray};
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0 0 0 0 rgba(0,0,0,.5);
  @media ${props => props.theme.devices.mobile} {
    border-style: none;
    width: 100%;
  }
`;


