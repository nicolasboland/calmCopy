import styled from "styled-components";

export const LandingContent = styled.div`
  padding: 30px 5px;
  width: 97%;
  margin: auto;

/*   @media ${({ theme }) => theme.devices.biggerMobile} {
    padding: 0px;
    width: 100%;
  } */

  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
  max-width: 1350px;
    margin: auto;
  }

  @media ${props => props.theme.devices.mobile} {
    padding: 30px 5px 0px 5px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.8rem;

  @media ${props => props.theme.devices.mobile} {
    padding: 1px;
    flex-direction: column-reverse;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

export const DescriptionColumn = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    @media ${props => props.theme.devices.mobile} {
      width: 100%;
  }
`;

export const ColumnWrapper = styled.div`
    height: 900px;
    overflow-y: auto;
    width: 95%;
    @media ${props => props.theme.devices.mobile} {
      height: auto;
  }
`;


