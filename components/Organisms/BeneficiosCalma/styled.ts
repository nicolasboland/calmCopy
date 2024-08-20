import styled from "styled-components";

export const ContainerBenefitsCalm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  @media ${(props) => props.theme.devices.mobile} {
    min-height: 60vh;
    margin-top: 2.5rem;
  }
`;
export const ContainerBenefitsCalmBox = styled.div`
  width: 45vw;
  padding: 1rem;
  border-style: solid transparent;
  border-radius: 2%;
  min-height: 80vh;
  background-color: ${props => props.theme.colors.lightHouse};
  @media ${(props) => props.theme.devices.biggerMobile} {
   min-height: 60vh;
   width: 55vw;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 85vw;
  }
  @media (max-width: 550px){
  min-height: 50vh;
}
@media (min-width: 1350px){
  min-height: 70vh;
}
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  @media ${(props) => props.theme.devices.mobile} {
    margin-top: 1.5rem;
  }
`;
