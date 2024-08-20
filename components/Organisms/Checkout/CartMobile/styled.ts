import { styled, keyframes, css } from 'styled-components'

export const MobileBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: #30303059;
  z-index: 10;
`

const openCart = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const StyledCartMobile = styled.div`
  position: fixed;
  width: 98%;
  z-index: 20;
  bottom: 0;
  right: 1%;
  transform: translate(-50%, 0);
  max-height: 683px;
  min-height: 583px;
  max-width: 622px;
  border-radius: 24px 24px 0 0;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  animation: ${openCart} .8s linear forwards;

  @media ${props => props.theme.devices.mobile}{
    max-height: 550px;
    }
`

export const ContainerCloseButton = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background-color: #ffff;
  display: flex;
`

export const CloseButton = styled.button`
  margin: 25px 25px 0 25px;
  border: none;
  background-color: #ffff;
  outline: none;
  cursor: pointer;
  margin-left: auto;
`
