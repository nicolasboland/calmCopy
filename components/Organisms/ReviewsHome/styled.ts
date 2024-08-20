import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 50px;
  padding-bottom: 50px;

  @media ${props => props.theme.devices.mobile} {
    margin-top: 10px;
    margin: 0;
    padding-bottom: 0;
  }

  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
    max-width: 1240px;
    margin: auto;
  }
`;

export const Bold = styled.b`
  font-family: ${(props) => props.theme.fonts.extraBold}, "Arial";
`;

export const ButtonReviews = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`