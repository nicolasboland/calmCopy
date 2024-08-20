import styled from "styled-components";

export const DivMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-right: 1.5rem;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 90%;
    margin-right: 0;
  }
`;
