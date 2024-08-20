import styled from "styled-components";

export const LandingContent = styled.div`
  margin: 30px 50px;

  @media ${props => props.theme.devices.mobile} {
    margin-top: 10px;
    margin: 0;
  }

  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
    max-width: 1240px;
    margin: auto;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;
