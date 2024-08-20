import styled from "styled-components";

export const DivInformation = styled.div`
  display: flex;
  max-width: 1134px;
  padding: 10px;
  margin: auto;
  
  @media ${props=>props.theme.devices.mobile} {
    flex-direction: column;
    padding: 0% 4% 0% 4%;
  }
`;

export const DivImages = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media ${props=>props.theme.devices.mobile} {
    width: 95%;
    order: 2;
  }
`;

export const DivTexts = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props=>props.theme.devices.mobile} {
    width: 95%;
    order: 1;
  }
`;

export const DivDivisor = styled.div`
  background-color: ${props=>props.theme.colors.lynxWhite};
  border-radius: 10px;
  margin-bottom: 0.5em;
  display: flex;
  padding: 10px;
`;

export const DivRight = styled.div`
   display: flex;
   flex-direction: row-reverse;
`

export const DivDivisorImg = styled.div`
  width: 20%;
`;

export const DivDivisorText = styled.div`
  width: 20%;
  padding-left: 0.5rem;
`;

export const DivBar = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  background: linear-gradient(90deg, ${props=>props.theme.colors.yellowCalm} 0%, ${props=>props.theme.colors.dullViolet} 100%);
  border-radius: 8px;
  height: 1em;
  width: 100%;
`;

export const DivBarImgs = styled.div`
  display: flex;
  margin: 1rem 1rem 0 1rem;
`;

export const DivImgHot = styled.div`
  width: 50%;
`;

export const DivImgCold = styled.div`
display: flex;
justify-content: flex-end;
  width: 50%;
`;

export const DivCombinationsText = styled.div`
  padding: 0 3rem 0 3rem;

  @media ${props=>props.theme.devices.mobile} {
    padding: 0 0 0 1rem;
  }
`;