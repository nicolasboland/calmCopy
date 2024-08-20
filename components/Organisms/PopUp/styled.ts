import styled, { keyframes } from "styled-components";
import { theme } from "@/utils/Theme";

export const Container = styled.div`
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9998;
  }
`;

export const DivPopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 9998;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 700px;

  @media ${theme.devices.mobile} {
    width: 350px;
    flex-direction: column;
  }
`;

export const DesktopPopup = styled.div`
  display: block;
  @media ${theme.devices.mobile} {
    display: none;
  }
`

export const MobilePopup = styled.div`
  display: none;
  @media ${theme.devices.mobile} {
    display: block;
  }
`


export const CloseButton = styled.div`
  position: absolute;
  bottom: 85%;
  right: 5%;
  cursor: pointer;
  margin: 10px;

  @media ${theme.devices.mobile} {
    position: relative;
    bottom: initial;
    right: initial;
    margin: 10px 0 0 0;
    left: 40%;
  }
`;

export const DivImage = styled.div`
  flex-basis: 40%;
  height: 100%;
  width: 100%;
  margin-bottom: -4.5px;

  @media ${theme.devices.mobile} {
    margin: auto auto 1em auto;
  }
`;

export const DivInfo = styled.div`
  flex-basis: 60%;
  padding: 20px 90px 20px 0px;
  position: relative;
  display: flex;
  flex-direction: column; 

  @media ${theme.devices.mobile} {
    padding: 0 20px 1rem 20px;
  }
`;

export const MarkedText = styled.div`
  background-color: ${theme.colors.wildViolet};
  border-radius: 5px;
  padding: 6px;
  align-self: flex-start;

  @media ${theme.devices.mobile} {
    align-self: center;
  }
`;

export const CopyButton = styled.div`
  @media ${theme.devices.mobile} {
    align-self: center;
  }
`

const copiedTextAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-125%);
  }
`;

export const CopiedText = styled.div`
  position: absolute;
  animation: ${copiedTextAnimation} 1s linear infinite;
  top: 50%;
  left: 74%;
  display: inline-block;
  background-color: transparent;
  color: ${theme.colors.black};
  padding: 4px 4px;
  border-radius: 5px;
  opacity: 1;
  transition: opacity 1s ease-in-out;

  @media ${theme.devices.mobile}{
      left: 73%;
    }
`

export const CountContainer = styled.div`
  width: 220px;
  height: 30px;
  background-color: ${theme.colors.northernBarrensDust};
  border-radius: 6px;
  margin-bottom: 10px;
`