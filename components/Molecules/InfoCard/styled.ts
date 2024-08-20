import styled from "styled-components"

export const Card = styled.div<{ $carousel?: boolean, $is30Noches?: boolean, $isHotSale?: boolean }>`
  margin: 10px 0;
  flex-basis: 45%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px 10px;
  background: ${(props) =>
    props.$is30Noches
      ? "linear-gradient(to bottom right, #5700AA, #7A00ED)"
      :  props.$isHotSale 
      ? "linear-gradient(135deg, #303030 30%, #000000 100%)"
      : "linear-gradient(262.69deg, #F5A203 -9.15%, #5700ff 123.01%)"};
  @media ${(props) => props.theme.devices.biggerMobile} {
    max-height: ${(props) => props.$carousel && "400px"};
    border-radius: ${(props) => props.$carousel && "0"};
  }
  @media ${(props) => props.theme.devices.mobile} {
    max-height: ${(props) => props.$carousel && "200px"};
    width: 100%;
  }
`

export const DivImageCard = styled.div<{ $carousel?: boolean }>`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.devices.biggerMobile} {
    max-width: ${(props) => props.$carousel && "60%"};
    margin: ${(props) => props.$carousel && "0"};
    position: ${(props) => props.$carousel && "absolute"};
    opacity: ${(props) => props.$carousel && ".2"};
    transition: ${(props) => props.$carousel && "all 3s ease;"};
  }

  @media ${(props) => props.theme.devices.mobile} {
    width: 50%;
  }
`

export const DivContainerCard = styled.div<{ $carousel?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.devices.biggerMobile} {
    height: ${(props) => props.$carousel && "400px"};
    position: ${(props) => props.$carousel && "relative"};
    max-width: ${(props) => props.$carousel && "800px"};
    justify-content: ${(props) => props.$carousel && "center"};
    overflow: ${(props) => props.$carousel && "hidden"};
    &:hover {
      ${DivImageCard} {
        transform: ${(props) => props.$carousel && "scale(0.9)"};
        transition: ${(props) => props.$carousel && "all 3s ease"};
      }
    }
  }
  @media ${(props) => props.theme.devices.mobile} {
    height: ${(props) => props.$carousel && "200px"};
    max-width: ${(props) => props.$carousel && "100%"};

  }
`

export const DivTextCard = styled.div<{ $carousel?: boolean }>`
  width: 60%;
  padding: 0 10px;
  text-align: left;
  @media ${(props) => props.theme.devices.biggerMobile} {
    position: ${(props) => props.$carousel && "relative"};
    max-width: ${(props) => props.$carousel && "40%"};
    text-align: ${(props) => props.$carousel && "center"};
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 50%;
  }
`
