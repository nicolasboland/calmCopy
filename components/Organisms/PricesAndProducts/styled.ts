import styled from "styled-components";
import { theme } from "@/utils/Theme";


export const DivColchon = styled.section`
  background-image: url(https://calmessimple.com.ar/wp-content/uploads/2023/11/Render_Home_Desktop-1.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75% auto;
  margin-top: 2em;
  font-family: ${props => props.theme.fonts.bold}, "Arial";

  @media ${theme.devices.mobile} {
    background-image: none;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-color: ${theme.colors.white};
  }
`;

export const DivCalm = styled.div`
  width: 39%;
  background-color: ${theme.colors.yellowCalm};
  border-radius: 0 44px 44px 0;
  display: flex;
  justify-content: flex-start;

  @media ${theme.devices.middleResolutionDesktop} {
    justify-content: center;
    min-height: 33em;

  }
  @media ${theme.devices.mobile} {
    display: flex;
    flex-direction: column;
    background-color: initial;
    width: 100%;
  }
`;

export const DivContent = styled.div`
  margin: 1rem 0 1rem 2rem;
  position: relative;

  @media ${theme.devices.middleResolutionDesktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${theme.devices.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 2rem 1rem 2rem;
  }
`;

export const DivText = styled.div`
  margin-bottom: 20px;
  @media ${theme.devices.mobile} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const DivButton = styled.div`
  @media ${theme.devices.mobile} {
    width: 100%;
    text-align: center;
  }
`;

export const DivEmpty = styled.div`
  width: 61%;

  @media ${theme.devices.mobile} {
    background-color: initial;
    width: 0%;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 3px;
  justify-content: flex-start;
`;

export const PillContainer = styled.div`
  div {
    top: 4%;
  }
`

export const DivPrice = styled.div`
display: flex;
`;
export const Price = styled.div`
padding-right: 5px;
`;

export const PriceLine = styled.div`
  @media ${theme.devices.mobile} {
    margin-right: 5px;
  }
`;

export const DivButtonInfoExtra = styled.div`
  font-size: 0.8em;
  @media ${theme.devices.mobile} {
    font-size: 0.65em;
  }
`;

export const ListInfoExtra = styled.ul`
  margin: 0.5rem 0 0.5rem 0;
  font-family: ${props => props.theme.fonts.regular}, "Arial";
  list-style: none;
  text-align: left;
  line-height: 1.2;
  padding: 0px;
  > li a {
    text-decoration: none !important;
    color: ${props => props.theme.colors.white} !important;
  }

  @media ${theme.devices.mobile} {
    > li a {
      color: ${props => props.theme.colors.offBlack} !important;
    }
  }
`;
