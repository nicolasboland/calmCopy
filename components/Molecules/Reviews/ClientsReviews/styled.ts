import styled from "styled-components";

export const DivReviews = styled.section`
  padding: 0% 12.5% 0% 12.5%;
  margin-top: 4rem;

  @media ${props => props.theme.devices.mobile} {
    padding: 0% 2% 0% 2%;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
`;


interface TabProps {
  show: string
  id: string
  name: string
}

export const DivReviewsTabs = styled.div`
    border: 1px solid ${props => props.theme.colors.steam};
    padding: 20px;
    margin-top: -2px;
`

export const TabsContent = styled.div<TabProps>`
  display: ${props => props.show === props.name ? "initial" : "none"};
`;

