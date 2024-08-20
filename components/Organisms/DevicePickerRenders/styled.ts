import styled from "styled-components";

export const RenderContainer = styled.div<{ $isRenderSelected: boolean }>`
  width: 100%;
  height: 580px;
  border-radius: 10px;
  display: ${props => props.$isRenderSelected ? "block" : "none"};

  @media ${(props) => props.theme.devices.mobile} {
    height: 340px;
}
`

export const ContainerButtons = styled.div<{ $isRenderSelected?: boolean}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: ${props => props.$isRenderSelected ? '5%' : '24%'};
  left: 2%;
  gap: 15px;
  padding: 9px 13px;
  border-radius: 31px;
  cursor: pointer;
  background: linear-gradient(to bottom,
    ${props => props.$isRenderSelected ? '#E7E7E7' : '#F8F8F8'} 50%, ${props => props.$isRenderSelected ? '#F8F8F8' : '#E7E7E7'} 50%);

  @media ${(props) => props.theme.devices.mobile} {
    padding: 6px 9px;
    gap: 10px;
    bottom: ${props => props.$isRenderSelected ? '25%' : '51%'};
    left: 5%;
  }

  @media ${(props) => props.theme.devices.biggerMobile} {
    bottom: ${props => props.$isRenderSelected ? '5%' : '32%'};
    left: 2%;
  }
  @media ${(props) => props.theme.devices.smallMobile} {
    bottom: ${props => props.$isRenderSelected ? '5%' : '35%'};
  }
`

export const IphoneImg = styled.div`
  width: 100%;
  height: 340px;
  background-color: ${(props) => props.theme.colors.coldMorning};
`

export const ButtonRenderLink = styled.a`
  position: absolute;
  right: 5%;
  bottom: 5%;
  background-color: ${(props) => props.theme.colors.coldMorning};
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`
