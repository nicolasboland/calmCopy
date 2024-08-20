import styled from "styled-components";

export const Container = styled.section`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  @media ${({ theme }) => theme.devices.mobile} {
     width: 33.3%;
  }
`

