import styled from "styled-components";

export const DivShipment = styled.section`
  background-color: ${(props) => props.theme.colors.fulvous};
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const DivImage = styled.div`
  width: 25%;
  @media ${(props) => props.theme.devices.biggerMobile} {
    width: 60%;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
  }
`;
