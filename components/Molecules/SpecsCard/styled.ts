import styled from "styled-components";
import { theme } from "@/utils/Theme";

export const DivDream = styled.section`
  padding: 0% 12.5% 0% 12.5%;
  text-align: center;

  @media ${theme.devices.mobile} {
    padding: 0% 1% 0% 1%;
  }
`;

export const DivInformation = styled.div`
  display: flex;


  @media ${theme.devices.mobile} {

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const InfomationUnit = styled.div<{ $isSelected: boolean }>`
  box-sizing: border-box;
  width: 20%;
  background-color: ${theme.colors.lynxWhite};
  border: ${props => props.$isSelected && `1px solid ${props.theme.colors.madForMango}`};
  margin: 0em 0.5em 0em 0.5em;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 530px;

  @media ${theme.devices.mobile} {
    max-width: 47%;
    width: 50%;
    margin: 5px;
    min-height: 420px;
  }
`;

export const DivImgInformation = styled.div`
  margin: 0% 10% 0% 10%;
`;

export const DivTextInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0em 1em 0em;
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  border-color: ${theme.colors.coldMorning};
  width: 100%;
  
  @media ${theme.devices.mobile} {
    padding: 0.5em 0em 0.5em  0em;
  }
`;

export const DivMapInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectedProduct = styled.div`
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`