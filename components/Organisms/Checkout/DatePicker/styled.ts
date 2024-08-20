import { styled } from 'styled-components'

export const CalendarContainer = styled.div`
  border-radius: 9px;
  box-shadow: 0px 3px 12px 0px #0000001f;
  position: absolute;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.white};
  top: 60px;

  .selected-date:not([disabled]) {
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.offBlack};
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .selected-date:hover:not([disabled]) {
  }
  .nav-button-previous {
    display: absolute;
    left: 5px;
  }
  .nav-button-next {
    display: absolute;
    right: 5px;
  }
  .caption {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    position: relative;
    z-index: 1;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    z-index: 2;
  }
`

export const DatePickerContainer = styled.div`
  position: relative;
  width: 100%;
`
