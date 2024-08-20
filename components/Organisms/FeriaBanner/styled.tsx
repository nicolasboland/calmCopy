import styled from "styled-components";

export const LandingContent = styled.div`
  margin: 30px 50px;

  @media ${props => props.theme.devices.mobile} {
    margin-top: 10px;
    margin: 0;
  }

  @media (min-width: 1300px) {
    max-width: 1140px;
    margin: auto;
  }
`;

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 2rem;
`;
