import styled from "styled-components"

export const OptionsPickerContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
  cursor: pointer;
`

export const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lynxWhite};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 14px;
  }
`

export const OptionsContainer = styled.div`
  border-radius: 9px;
  box-shadow: 0px 3px 12px 0px ${({ theme }) => `${theme.colors.black}1f`};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  top: 60px;
  left: 0;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  max-height: 250px;
  display: grid;
  grid-template-columns: 1fr;
  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: 1fr 1fr;
  }
`