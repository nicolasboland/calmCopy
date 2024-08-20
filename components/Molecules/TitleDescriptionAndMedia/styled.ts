import styled from "styled-components";
import { theme } from "@/utils/Theme";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3% 5% 3% 10%;
  width: 100%;
  margin: auto;

  @media ${props=>props.theme.devices.mobile} {
    flex-direction: column;
    padding: 10px 12px 10px 12px;
  }

 
`;

export const DivInfo = styled.div<{$maxWidth? : string} >`
  max-width: ${({ $maxWidth }) => $maxWidth || "100%"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${props=>props.theme.devices.mobile} {
    flex-direction: column;

  }
`

export const DivButton = styled.div`
@media ${props=>props.theme.devices.mobile} {
  display: flex;
  align-items: center;
  justify-content: center;

}
`

export const DivImage = styled.div`
  width: 55%;
  height: auto;

  @media ${props=>props.theme.devices.mobile} {
    width: 95%;
  }
`;


export const DivTexto = styled.div`
  width: 45%;
  max-width: 22rem;
  margin: 0 10px;
/*   padding: 25px 70px 37px; */

  @media ${props=>props.theme.devices.mobile} {
    width: 90%;
    padding: 0px;
  }
`;
export const DivIframe = styled.div`
  width: 55%;
  height: auto;

  @media ${props=>props.theme.devices.mobile} {
    width: 95%;
    margin-bottom: 1rem;
  }
`;

export const Iframe = styled.iframe`
  width: 640px;
  max-width: 100%;
  height: 340px;

  @media ${props=>props.theme.devices.mobile} {
    height: 270px;
  }

  @media ${props=>props.theme.devices.middleResolutionDesktop} {
    height: 430px;
  }
`;