import styled, { keyframes } from "styled-components";

export const spinAnimation = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

export const SpinnerContainer = styled.div<{ $isCenterScreen?: boolean }>`
  width:  ${props => props.$isCenterScreen ? "350px" : "15px"};
  height: ${props => props.$isCenterScreen ? "350px" : "15px"};
  display: inline-block;
  overflow: hidden;
  background: rgba(241, 242, 243, 0);
`;

export const SpinnerDiv = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  transform: translateZ(0) scale(0.15);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

export const RotatingDiv = styled.div<{ $isBlack?: boolean, $hasOverlay?: boolean }>`
  position: ${props => props.$hasOverlay ? "" : "absolute"};
  animation: ${spinAnimation} 1s linear infinite;
  width: 80px;
  height: 80px;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: 0 2px 0 0  ${props => props.$isBlack ? "black" : "white"};
  transform-origin: 40px 41px;
  box-sizing: content-box;
`;

export const SpinnerCenter = styled.div<{ $isBlack?: boolean }>`
  width: 80px;
  height: 80px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid ${props => props.$isBlack ? "black" : "white"};
  animation: ${spinAnimation} 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
`

export const SpinnerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`