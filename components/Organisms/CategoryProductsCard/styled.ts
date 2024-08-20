import styled from "styled-components";

export const DivCards = styled.section<{ $isComparition?: boolean }>`
  max-width: 1134px;
  padding: 10px;
  margin: ${props => props.$isComparition ? "0 auto" : "2rem auto 0 auto"};
    box-sizing: border-box; 

  @media ${props=>props.theme.devices.mobile} {
    padding: ${props => props.$isComparition && "0"};
    margin: ${props => props.$isComparition ? "0 0 1rem 0" : "1.5rem 0 1rem 0"};
  }
`;

export const DivText = styled.div`
  margin-bottom: 2rem;
`;

export const DivCardsContainer = styled.div<{ $isFeria?: string }>`
  display: flex;
  justify-content: center;
  flex-wrap: ${props => props.$isFeria === "feria" ? "wrap" : "nowrap"};
  
  @media ${props=>props.theme.devices.mobile} {
    flex-wrap: wrap;
  }
`;
