import styled from "styled-components";

export const ContainerRuedaDeCalma = styled.div`
  width: 100%;
  max-height: 80vh;
  height: 72vh;
  background: url("https://calmessimple.com.ar/wp-content/uploads/2023/06/Banner_RLC.webp")
    no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  @media ${(props) => props.theme.devices.mobile} {
    height: 55vh;
    width: 100%;
    background: url("https://calmessimple.com.ar/wp-content/uploads/2023/06/Banner_RLC_mobile.webp")
      no-repeat center;
    background-size: cover;
  }
`;
export const ContainerText = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${(props) => props.theme.devices.middleResolutionDesktop} {
        width: 24%;
    }
    @media ${(props) => props.theme.devices.mobile} {
        width: 100%;
        justify-content: flex-start;
        margin-top: 40px;
    }
`;

export const EmptyDiv = styled.div`
    width: 50%;
    @media ${(props) => props.theme.devices.mobile} {
        width: 0%;
    }
`