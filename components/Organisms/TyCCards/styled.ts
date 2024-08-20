import styled from "styled-components";

export const CardsPromotionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  gap: 10px;
  padding: 0% 3% 0% 3%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;