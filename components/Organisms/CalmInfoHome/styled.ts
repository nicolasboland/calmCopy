import styled from "styled-components";
import { theme } from "@/utils/Theme";

export const SectionImgDescButt = styled.section`
  max-width: 1000px;
  margin: auto;
  padding-bottom: 2rem;

  @media ${theme.devices.mobile} {
    padding-bottom: 0;
  }
`;

export const DivImgDescButt = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px 0px 10px;

  @media ${theme.devices.mobile} {
    flex-direction: column;
    padding: 0 10px 20px 10px;
  }
`;

export const DivInfo = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${theme.devices.mobile} {
    width: 100%;
    padding: 10px 0px;
  }
`;
