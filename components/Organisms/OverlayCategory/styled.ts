import styled, { css, keyframes } from 'styled-components';

const showAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const hideAnimation = keyframes`
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;
export const Overlay = styled.div<{ $showOverlay: boolean; $hasBeenVisible: boolean, $isNavbarVisible?: boolean }>`
    position: fixed;
    opacity: 0;
    transform: translateY(100%);
    z-index: 10;
    right: 0px;
    top: 117px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    height: 120px;
    width: 100%;
    display: flex;

    ${({ $showOverlay, $hasBeenVisible }) => $hasBeenVisible && (
     $showOverlay 
    ?  css`animation: ${showAnimation} 0.3s ease-in-out forwards; `
    : css`animation: ${hideAnimation} 0.3s ease-in-out forwards;` )};

    @media ${(props) => props.theme.devices.mobile} {
      width: 100%;
      top: 97px;
      top: ${props => props.$isNavbarVisible ? "97px" : "0px"};
      transition: top 0.3s;
      right: 0px;
      height: 105px;
      padding: 1px 10px;
      justify-content: center;
    }
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1134px;
  margin: auto;

  @media ${(props) => props.theme.devices.mobile} {
    gap: 10px;
    margin: 0;
  }
`

export const Card = styled.div`
  width: 49%;
   display: flex;
   flex-direction: column;

   @media ${(props) => props.theme.devices.mobile} {
      width: 50%;
    }
`
export const TextAndImage = styled.div`
  position: relative;
  display: flex;
  padding: 5px 0 5px 0;
  gap: 10px;

  @media ${(props) => props.theme.devices.mobile} {
    padding: 4px 0;
  }
`

export const ButtonContainer = styled.div`
  padding: 0 10px 0 0;

  @media ${(props) => props.theme.devices.mobile} {
    padding: 0;
  }
`
