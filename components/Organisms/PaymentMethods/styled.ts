import styled from "styled-components";
import { theme } from "@/utils/Theme";

export const DivPayment = styled.section`

  padding: 0 4em;
  padding: 42px 4em 24px 4em;
  background-color:${theme.colors.lynxWhite};

  @media ${theme.devices.mobile} {

    padding: 1em;
  }
`;

export const DivUnits = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  background-color:${theme.colors.white};
  border-radius: 12px 12px 12px 12px;
  max-width: 1140px;
  padding: 1em 0.5em;
`;
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  user-select: none;
`;