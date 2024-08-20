import styled from "styled-components";

export const ContainerResumen = styled.div`
  max-width: 70vw;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  p {
    padding-bottom: 5px;
  }

  @media ${(props) => props.theme.devices.mobile} {
    width: 58vw;
  }
`;
export const InfoCustomer = styled.div`
  font-size: 1.1rem;
  margin: 1px;
  color: ${(props) => props.theme.colors.millionGray};

  div p {
    font-family: ${(props) => props.theme.fonts.medium};
  }


  @media ${(props) => props.theme.devices.mobile} {
    font-size: 0.9rem;
  }

  span {
    font-family: ${(props) => props.theme.fonts.medium};
  }
`;
