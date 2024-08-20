import styled from "styled-components";

export const FullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`

export const FactsSection = styled.div<{$image?: string;}>`
  background-image: url(${(props) => props.$image});
  background-size: 1400px;
  background-repeat: no-repeat;
  background-position: center top 5.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;
  transition: all 1s;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 1rem;
    min-height: 70vh;
    background-repeat: repeat-x;
    background-position: center top;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 70vh;
    background-image: url("https://calmessimple.com.ar/wp-content/uploads/2023/08/Manifiesto_Mobile_A.webp");
    background-size: 768px;
    background-position: center top -26rem;
  }

  @media (max-width: 380px) {
    background-size: 488px;
    background-position: center top -16rem;
  }
`;

export const TextWrapper = styled.div<{$leftAlign?: boolean; $paddingTop?: string;}>`
  width: 56%;
  display: flex;
  justify-content: ${(props) => (props.$leftAlign ? "flex-start" : "flex-end")};
  padding-top: ${(props) => props.$paddingTop};

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
    padding-top: calc((${(props) => props.$paddingTop} / 2) + 3rem);
  }

  @media (max-width: 768px) {
    width: 97%;
    padding-top: calc(${(props) => props.$paddingTop} / 2);
  }
`;