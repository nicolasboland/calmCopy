import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3rem;
    max-width: 1134px;
    padding: 10px;
    margin: auto;

  @media ${props=>props.theme.devices.mobile} {
    padding: 0% 4% 0% 4%;
  }
`