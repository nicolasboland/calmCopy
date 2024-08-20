import ReactInputMask from "react-input-mask"
import styled from "styled-components"
import { theme } from "@/utils/Theme"

type ThemeColors = keyof typeof theme.colors

export const StyledInputMask = styled(ReactInputMask)<{$borderColor?: ThemeColors}>`
  position: relative;
  border-radius: 8px;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  outline: none;
  border: 2px solid ${({ $borderColor, theme }) =>
    $borderColor ? theme.colors[$borderColor] : "millionGray"};

  &:focus {
  border: 2px solid ${({ theme }) => theme.colors.yellowCalm};
  };

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

export const CardImgContainer = styled.div`
  img {
    border: 1px solid ${(props) => props.theme.colors.millionGray};
    border-radius: 5px;
    width: 2.2rem;
    text-align: center;
    height: 1.5rem;
    padding: 2px;
    object-fit: scale-down;
  }
`
