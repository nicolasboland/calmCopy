import styled from "styled-components";
import { CountdownStyles } from "./types"

export const Container = styled.div<CountdownStyles>`
  padding: ${props => props.$isHeadbanner ? "0 0 0 5px" : "7px 6px"};
  visibility: ${props => props.$show ? "visible" : "hidden"};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${props=>props.theme.devices.mobile}{
    margin: auto;
  }
`;