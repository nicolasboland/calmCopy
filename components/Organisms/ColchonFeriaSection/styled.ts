import styled from "styled-components";

export const LandingContent = styled.div`
  margin: 30px 50px;

  @media ${props => props.theme.devices.mobile} {
    margin-top: 10px;
    margin: 0;
  }

  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
    max-width: 1240px;
    margin: 30px auto;
  }
`;

export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    @media ${props => props.theme.devices.biggerMobile} {
        width: 95%;
        flex-direction: column;
        align-items: center;
    }
`;

export const Column = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 0 10px;
    @media ${props => props.theme.devices.biggerMobile} {
        width: 100%;
    }
    @media ${props => props.theme.devices.mobile} {
        margin-bottom: 2rem;
    }
`;

export const InnerColumn = styled.div`
    display: flex;
    flex-direction: row;
`;

