import { styled } from 'styled-components'

export const FormLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 6px;
`

export const CalendarContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 3px 12px 0px ${({ theme }) => `${theme.colors.black}1f`};
  position: absolute;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.white};
  top: 50px;
  font-size: 16px;
  
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

  &[type="color"],
  &[type="date"],
  &[type="datetime"],
  &[type="datetime-local"],
  &[type="email"],
  &[type="month"],
  &[type="number"],
  &[type="password"],
  &[type="search"],
  &[type="tel"],
  &[type="text"],
  &[type="time"],
  &[type="url"],
  &[type="week"],
  &:focus,
  &::placeholder {
    font-size: 16px;
  }
`

export const DatePickerContainer = styled.div`
  position: relative;
  width: 100%;
`
