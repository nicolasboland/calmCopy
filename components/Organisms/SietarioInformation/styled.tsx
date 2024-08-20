import styled from "styled-components";

export const FullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  margin-top: -4px;
`


export const InformationSection = styled.div`
  width: 100%;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    padding: 0;
    transition: all 0.5s;
  }
`;

export const DivKeys = styled.div`
  width: 59%;

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 80%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 98%;
  }
`;

export const KeysContent = styled.div<{$imageToLeft?: boolean;}>`
  width: 100%;
  min-height: 10rem;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.$imageToLeft ? "row" : "row-reverse")};

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row-reverse;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 1rem;
    margin-bottom: 1rem;
    gap: 0.2rem;
  }
`;

export const KeyCell = styled.div<{$isToLeft?: boolean;}>`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 1.8rem;
  width: 40%;

  @media (min-width: 768px) and (max-width: 1023px) {
    align-items: start;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    align-items: center;
    width: 99%;
  }
`;

