import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

export const SliderContainer = styled.div<{$selectedColor?: string; $isFirstImageLoaded?: boolean}>`
  width: 100%;
  display: ${({ $isFirstImageLoaded }) => ($isFirstImageLoaded ? "block" : "none")};

  .control-dots {
    margin: 20px 0;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 45%;
    margin: 5px;
    cursor: pointer;
    opacity: .5;
    transition: none;
  }
  .carousel .control-dots .dot.selected {
    background-color: ${props => props.$selectedColor ?? "white"};
    box-shadow: none;
    opacity: 1;
  }

  @media ${props => props.theme.devices.mobile} {
    .control-dots {
      margin: 0;
    }
  }
`;

export const SliderWrapper = styled.div<{ $imageSrc: string, $mobileImageSrc: string}>`
  width: 100%;
  height: calc(100vh - 160px);
  position: relative;
  max-height: 465px;
  background-image: url(${props => props.$imageSrc});
  background-size: cover;
  background-position: 45%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media ${props => props.theme.devices.mobile} {
    height: calc(100vh - 95px);
    max-height: none;
    justify-content: flex-start;
    background-image: url(${props => props.$mobileImageSrc});
  }

  @media ${props=>props.theme.devices.smallMobile}{
    height: calc(100vh - 75px);
    max-height: none;
    justify-content: flex-start;
    }
  
  @media ${props => props.theme.devices.middleResolutionDesktop} {
    max-height: 600px;
  }
`;

export const ButtonWrapper = styled.div<{$isNext?: boolean}>`
  background-color: #F5F5F5;
  position: absolute;
  top: 45%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .3;
  ${props => !props.$isNext && "left: 0;"}
  ${props => props.$isNext && "right: 0;"}
  padding: ${props => props.$isNext ? ".8em 0 .8em .4em" : ".8em .4em .8em 0"};
  border-radius: ${props => props.$isNext ? ".5em 0 0 .5em" : "0 .5em .5em 0"};
  opacity: .3;

  @media ${props => props.theme.devices.mobile} {
    display: none;
  }
`;

export const BackButton = styled(IoIosArrowBack)<{$isNext?: boolean}>`
  ${props => props.$isNext && "transform: rotate(180deg);right: 0;"}
  font-size: 1.8rem;
  color: ${props => props.theme.colors.millionGray};
`;


export const Description = styled.div`
    font-size: 1.4em;
    margin-bottom: 2rem;
    margin-top: .3rem;
    color: ${props => props.theme.colors.drWhite};
    font-family: ${props => props.theme.fonts.regular};
    text-align: start;
    line-height: 1.1em;

    @media ${props=>props.theme.devices.mobile}{
      text-align: center;
      font-size: 1.2em;
      width: 90%;
      margin: 10px auto;
    }

    @media ${props=>props.theme.devices.smallMobile}{
      text-align: center;
      font-size: 1.1em;
      width: 90%;
      margin: 10px auto;
    }
`

export const UpperText = styled(Description)`
    font-size: 1.6em;
    font-family: ${props => props.theme.fonts.light};
    color: ${props => props.theme.colors.drWhite};
    margin: 0;

    @media ${props=>props.theme.devices.mobile}{
      font-size: 1.5em;
    }

    @media ${props=>props.theme.devices.smallMobile}{
      font-size: 1.6em;
    }
`

export const ButtonsWrapper = styled.div<{$hasSecondButton: boolean}>`
width: ${props => props.$hasSecondButton ? "20%" : "45%"};
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media ${props=>props.theme.devices.mobile}{
    flex-direction: column;
    width: 100%;
    gap: 0px;
  }
`;

export const Button = styled.a<{$textColor?: string;$backgroundColor?: string;$backgroundHoverColor?: string,$hasSecondButton?: boolean}>`
  background-color: ${(props) => props.$backgroundColor};
  padding: 15px 30px;
  display: inline;
  border-radius: 45px;
  color: ${props=> props.$textColor};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  font-size: ${props => props.$hasSecondButton ? ".8em" : "1em"};
  font-family: ${props => props.theme.fonts.bold};
  transition: background-color 0.3s ease;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  width: ${props => props.$hasSecondButton ? "45%" : "80%"};

  &:hover {
    background-color: ${(props) => props.$backgroundHoverColor};
    color: white;
  }

  @media ${props => props.theme.devices.mobile} {
    width: 90%;
    margin: auto;
  }

  @media ${props=>props.theme.devices.smallMobile}{
    margin-top: .2em;
  }
`

export const SecondaryButton = styled(Button)`
  background: none;
  background-color: none;
  border-radius: 45px;
  border: 1px solid ${props => props.theme.colors.drWhite};
  width: 45%;
  font-size: .8em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => `${props.theme.colors.drWhite}40`};
  }

  @media ${props => props.theme.devices.mobile} {
    width: 100%;
  }
`
export const Column = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin-left: 3rem;

  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto 100px 0;
    padding: 30px 10px 15px 10px;
  }

  @media ${(props) => props.theme.devices.smallMobile} {
    margin: 0 auto 80px 0;
  }
`;

export const Cucarda = styled.img`
  position: absolute;
  width: 10%;
  left: 5%;
  bottom: 10%;
  @media ${props=>props.theme.devices.mobile}{
    position: absolute;
    width: 30%;
    left: 65%;
    bottom: 60%;
  } 
`

export const ContentWrapper = styled.div<{ $templateDesktop: string, $templateMobile: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  width: ${props => 
    props.$templateDesktop === "hasta_15_caracteres_2_lineas"
    ? "40%"
    : props.$templateDesktop === "hasta_26_caracteres_3_lineas"
    ? "44%"
    : props.$templateDesktop === "hasta_45_caracteres_3_lineas"
    && "45%"
  };
  @media ${(props) => props.theme.devices.mobile} {
    justify-content: center;
    width: ${props => 
    props.$templateDesktop === "hasta_15_caracteres_2_lineas"
    ? "70%"
    : props.$templateDesktop === "hasta_26_caracteres_3_lineas"
    ? "78%"
    : props.$templateDesktop === "hasta_45_caracteres_3_lineas"
    && "80%"
    };
  }
  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
    justify-content: center;
    width: ${props => 
    props.$templateDesktop === "hasta_15_caracteres_2_lineas"
    ? "30%"
    : props.$templateDesktop === "hasta_26_caracteres_3_lineas"
    ? "50%"
    : props.$templateDesktop === "hasta_45_caracteres_3_lineas"
    && "45%"
    };
  }
`;

export const Title = styled.h1<{ $isDefault: boolean, $templateDesktop: string, $templateMobile: string }>`
    font-family: ${props => props.theme.fonts.extraBold};
    font-size: ${props => props.$isDefault 
    ? "3.5em" 
    : props.$templateDesktop === "hasta_15_caracteres_2_lineas"
    ? "6.3em"
    : props.$templateDesktop === "hasta_26_caracteres_3_lineas"
    ? "5.3em"
    : props.$templateDesktop === "hasta_45_caracteres_3_lineas"
    && "3.8em"
    };
    color: ${props => props.theme.colors.drWhite};
    text-align: start;
    line-height: 1;
    margin-bottom: .2em;
    @media ${props=>props.theme.devices.mobile}{
      text-align: center;
      font-size: ${props => props.$isDefault 
      ? "3.5em" 
      : props.$templateMobile === "hasta_15_caracteres_2_lineas"
      ? "3em"
      : props.$templateMobile === "hasta_26_caracteres_3_lineas"
      ? "2.8em"
      : props.$templateMobile === "hasta_45_caracteres_3_lineas"
      && "2em"
    };
      margin-bottom: ${props => props.$isDefault ? "1.5rem" : ".5rem"};
    }
    @media ${props=>props.theme.devices.smallMobile}{
      text-align: center;
      font-size: ${props => props.$isDefault 
      ? "2.3em" 
      : props.$templateMobile === "hasta_15_caracteres_2_lineas"
      ? "3em"
      : props.$templateMobile === "hasta_26_caracteres_3_lineas"
      ? "2.7em"
      : props.$templateMobile === "hasta_45_caracteres_3_lineas"
      && "2em"
    };
      margin-bottom: ${props => props.$isDefault ? "1rem" : "0"};
    }`
