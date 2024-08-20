import styled from "styled-components";

export const ComponentContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;

  @media ${(props) => props.theme.devices.mobile} {
    padding-top: 0;
  }
`;
