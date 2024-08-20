import styled from "styled-components";
import { theme } from "@/utils/Theme";


export const DivTrials = styled.section`
  background-image: url("https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1e2c9303-dc9d-4a6d-11b2-32e1e164a000/fit=cover");
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em 0 1em 0;
  transition: background-image 0.3s, border 0.3s, border-radius 0.3s,
  box-shadow 0.3s;
  filter: grayscale(25%);

  @media ${theme.devices.middleResolutionDesktop} {
    align-items: flex-start;
  }

  @media ${theme.devices.mobile} {
    background-image: url("https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/feb37d4f-37ee-4fcf-8104-16f672dc6300/fit=cover");
    margin-top: 3%;
    margin-bottom: 5%;
    height: 40vh;
    transition: background-image 0.3s;
  }
`;

export const DivInfo = styled.div`
  padding: 20px 0;
  @media ${theme.devices.middleResolutionDesktop} {
    margin: 0px 0px 0px 15rem;
  }
  @media ${theme.devices.biggerMobile} {
    margin: 0px 0px 0px 2rem;
  }
  @media ${theme.devices.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 90%;
  }
`;

