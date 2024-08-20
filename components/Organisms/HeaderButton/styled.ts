import styled from "styled-components";
import { theme } from "@/utils/Theme";

export const DivDonate = styled.section<{$isFeria?: boolean, $isProduct?: boolean}>`
display: flex;
flex-direction: row;
width: 100%;
padding: ${props => props.$isFeria ? "4% 10.5% 4% 10.5%" : "0% 10.5% 0% 10.5%"};
background-color: ${({ $isFeria }) => $isFeria ? theme.colors.yellowCalm : theme.colors.darkerFadingHorizon};
${props => props.$isProduct && `background: linear-gradient(263.41deg, ${theme.colors.electricIndigo} -0.22%, ${theme.colors.yellowCalm} 82.31%)`};
${props => props.$isProduct && "border-radius: 20px;"};

@media  ${theme.devices.middleResolutionDesktop} {
  padding: 8rem 0 8rem 0;
}

@media ${theme.devices.mobile} {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ $isFeria, $isProduct }) => $isProduct 
  ? `linear-gradient(45deg, ${theme.colors.electricIndigo} -0.22%, ${theme.colors.yellowCalm} 82.31%);`
  : !$isFeria && `linear-gradient(180deg, ${theme.colors.electricIndigo} 0%, ${theme.colors.darkerYellowCalm} 73.44%, ${theme.colors.yellowCalm} 100%)`};
  padding: ${props => props.$isFeria ? "4%" : "0% 4% 0% 4%"};
  
}
`;

export const DivImage = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0% 5% 0% 0%;

@media  ${theme.devices.mobile} {
  padding: 0px;
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;
}
`;

export const DivText = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
@media  ${theme.devices.mobile} {
  width: 90%;
  text-align: center;
}
`;