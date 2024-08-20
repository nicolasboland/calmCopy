import styled, { keyframes } from "styled-components";

const animatePositive = keyframes` 0% { width: 0%; } `;

export const ProgresbarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.superSilver};
  border-radius: 10px;
  margin: 10px 0;
  position: relative;
  height: 35px;
`;

export const ActualProgressBar = styled.div`
  width: 0;
  animation: ${animatePositive} 3s;
  background-color: ${props => props.theme.colors.yellowCalm};
  border-radius: 5px;
`;

export const ProgressBarContent = styled.div`
  position: absolute;
  width: 99%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;
