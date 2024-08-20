import styled, { css, keyframes } from 'styled-components';

const showAnimation = keyframes`
  0% {
    transform: translateY(100%);
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
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Container = styled.div<{ $showATCButton: boolean; $hasBeenVisible: boolean }>`
    opacity: 0;
    position: fixed;
    z-index: 9999;
    right: 20px;
    bottom: 20px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    gap: 5px;
    height: 100px;
    width: 550px;
    padding: 20px 12px;
    transform: translateY(120%);
    display: flex;

    ${({ $showATCButton, $hasBeenVisible }) => $hasBeenVisible && (
     $showATCButton 
    ?  css`animation: ${showAnimation} 0.3s ease-in-out forwards; `
    : css`animation: ${hideAnimation} 0.3s ease-in-out forwards;` )};

    @media ${(props) => props.theme.devices.mobile} {
        width: 100%;
        bottom: 0;
        left: 0;
        height: 113px;
        padding: 5px 11px 10px 11px;
    }
`;

export const Wrapper = styled.div`
    width: 22%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WrapperButton = styled.div`
    width: 28%;
    display: flex;
    justify-content: center;
    align-items: center;
`