import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 40px;

  @media ${(props) => props.theme.devices.mobile} {
    margin-left: 0px;
  }
  `

export const Indicator = styled.div<{ $index: number }>`
  position: absolute;
  right: 30px;
  bottom: ${props => props.$index === 4 ? "-30px" : "0"};
  z-index: 8;
  cursor: pointer;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NumberIndicator = styled.div<{ $isSelected: boolean, $index: number }>`
  background-color: ${props => props.$isSelected ? props.theme.colors.yellowCalm : props.theme.colors.white};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.$isSelected && props.$index !== 3 ? "30px 0" :  props.$index === 4 ? "30px 0" : "0"};
  transition: margin 0.5s ease;

  @media ${(props) => props.theme.devices.mobile} {
/*     margin: ${props => props.$isSelected && props.$index === 4 
    ? "50px 0" : props.$isSelected 
    ? "30px 0" : props.$index === 4 && !props.$isSelected 
    ? "20px 0" :  "0"}; */
    margin: ${props => props.$index === 4 ? "35px 0" : "10px 0"};
  }
`

export const ImagesContainer = styled.div<{ $zIndex: number, $isSelected: boolean}>`
  height: 70px;
  z-index: ${props => props.$zIndex};
  margin: ${props => (props.$isSelected && props.$zIndex === 1) ? "50px 0" : props.$isSelected ? "30px 0" :  props.$zIndex === 1 ? "30px 0" : "0"};
  transition: margin 0.5s ease;

  @media ${(props) => props.theme.devices.mobile} {
    height: 55px;
    margin: ${ props => props.$zIndex === 1 ? "10px 0 " : 0}
  }
`