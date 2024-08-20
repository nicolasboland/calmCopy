import styled from "styled-components";

export const DivDirections = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3.5rem auto;
  max-width: 1100px;
  gap: 2.5rem;
  
  @media ${({ theme }) => theme.devices.mobile} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;
  }
`;
