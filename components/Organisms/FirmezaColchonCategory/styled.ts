import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 3rem;

  @media ${props => props.theme.devices.mobile} {
    gap: 5px;
  }
`