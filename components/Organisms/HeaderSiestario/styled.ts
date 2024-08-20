import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MainCircleSection = styled.div<{$image?: string;}>`
  background-image: url(${(props) => props.$image});
  font-size: 1.8rem;
  background-size: 1200px;
  min-height: 85vh;
  background-repeat: no-repeat;
  background-position: center top -15px;
  text-align: center;
  transition: all 1s;
  height: 650px;

  @media (min-width: 768px) and (max-width: 1350px) {
    background-size: 1300px;
    min-height: 40vh;
  }

  @media (max-width: 768px) {
    background-size: 880px;
    min-height: 48vh;
    height: 250px;
  }

  @media (min-width: 1350px) {
    min-height: 65vh;
  }

  @media (max-width: 380px) {
    min-height: 65vh;
  }

  p {
    margin: auto;
  }
`;
