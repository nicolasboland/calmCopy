import styled from "styled-components";

export const Content = styled.div`
    background-color: #f8f8f8;
    padding: 20px 0;
    margin-bottom: 2rem;

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
    margin: 30px 70px;

    @media ${props => props.theme.devices.mobile} {
        margin: 0;
  }
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media ${props => props.theme.devices.biggerMobile} {
        flex-direction: column;
        align-items: center;
    }
`;
