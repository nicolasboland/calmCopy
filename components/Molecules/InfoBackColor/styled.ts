import styled from "styled-components"
import { InfoBackColorStyled } from "./types";

export const BannerContainer = styled.div<InfoBackColorStyled>`
width: 100%;
text-align: center;
font-weight:700;
font-size:0.9rem;
display:flex;
justify-content:center;
align-items:center;
line-height: 30px;
min-height: 30px;
background-color: ${({ $backgroundColor, theme }) => $backgroundColor && theme.colors[$backgroundColor]};

@media ${({ theme }) => theme.devices.mobile} {
  font-size:1rem;
}
`;

