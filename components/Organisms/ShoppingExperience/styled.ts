import styled from "styled-components";
import { theme } from "@/utils/Theme";


export const DivExperience = styled.section`
  background-color: ${theme.colors.lynxWhite};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const DivLimit = styled.div`
  max-width: 900px;
  text-align: center;
  margin: auto;
  padding: 5px;
  @media ${theme.devices.mobile} {
    width: 100%
  }
`;

export const DivInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  @media ${theme.devices.mobile} {
     margin: 0 auto;
  }
`;