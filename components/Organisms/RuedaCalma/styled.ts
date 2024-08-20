import { styled } from "styled-components";
import { theme } from "@/utils/Theme";

export const ContainerRuedaCalm = styled.div`
  width: 63vw;
  max-height: 60vh;
  background: url("https://calmessimple.com.ar/wp-content/uploads/2023/06/Banner_RLC.webp")
    no-repeat center center;
  background-size: cover;
  display: flex;
  border-style: solid ${theme.colors.millionGray};
  border-radius: 20px;
  flex-direction: column;
  margin-bottom: 4.5rem;

  @media ${(props) => props.theme.devices.biggerMobile} {
    width: 80vw;
    height: 50vh;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 100vw;
    border-radius: 0;
    height: 30vh;
    margin-bottom: 2rem;
  }
`;

export const ContainerTextRuedaCalm = styled.div`
  width: 40vw;
  height: 48vh;
  justify-content: left;
  align-items: center;
  padding: 3rem;
  @media ${(props) => props.theme.devices.biggerMobile} {
    width: 60vw;
    height: 60vh;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 90vw;
    padding: 1.5rem;
  }
`;