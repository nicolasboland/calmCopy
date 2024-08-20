import styled from "styled-components";

export const DivIndications = styled.div`
  justify-self: flex-start;
  align-self: center;
  margin-left: 1.5rem;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 90%;
    margin: 0 auto;
  }
`;