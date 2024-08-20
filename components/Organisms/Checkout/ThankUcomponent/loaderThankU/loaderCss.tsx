import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const ContainerLoader = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const SpinnerContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 3rem;
  position: relative;
  &::before,
  &::after {
    content: '';
    border: 15px solid transparent;
    border-top: 15px solid ${props => props.theme.colors.yellowCalm};
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    animation: ${spinAnimation} 1s linear infinite;
  }
  &::before {
    animation-delay: -0.5s;
  }
  @media ${props => props.theme.devices.mobile}{
    width: 40px;
    height: 40px;
  }
`;
export const TitleLoader = styled.h1`
font-size: 2.5rem;
margin: 1rem;
font-family: ${props => props.theme.fonts.bold};
color: ${props => props.theme.colors.black};
@media ${props => props.theme.devices.mobile}{
  font-size: 1.2rem;
  }
`
export const TextLoader = styled.p`
font-size: 1.5rem;
font-family: ${props => props.theme.fonts.regular};
color: ${props => props.theme.colors.black};
@media ${props => props.theme.devices.mobile}{
  font-size: .9rem;
  }
`
const Spinner = () => {
  return <SpinnerContainer />;
};

export default Spinner;