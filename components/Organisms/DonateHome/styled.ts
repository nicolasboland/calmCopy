import styled from "styled-components";
import { theme } from "@/utils/Theme";



export const DivDonate = styled.section<{$withBorder?: boolean}>`
  background: linear-gradient(263.41deg, ${theme.colors.auberginePearl} -0.22%, ${theme.colors.yellowCalm} 82.31%);
  padding: 45px 5px 45px 0px;
  display: flex;
  margin: 15px 0px 15px 0px;
  ${props => props.$withBorder && "border-radius: 20px;"}
  @media ${theme.devices.mobile} {
    background: linear-gradient(45deg, ${theme.colors.auberginePearl} -0.22%, ${theme.colors.yellowCalm} 82.31%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DivImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${theme.devices.middleResolutionDesktop} {
    justify-content: flex-end;
    margin-right: 6rem;
  }
  @media ${theme.devices.mobile} {
    width: 100%;

  }
`;

export const DivText = styled.div`
  width: 50%;
  text-align: left;
  margin-top: 20px;

  @media ${theme.devices.mobile} {
text-align:center;
width: 100%;
  }
`;