import styled from "styled-components"
import { InputStyledProps } from "./types"

export const InputStyles = styled.input<InputStyledProps>`
  position: relative;
  border-radius: ${({ $borderRadius }) => $borderRadius ? $borderRadius : "8px"};
  width: ${({ $width }) => $width ? $width : "100%"};
  padding: 15px;
  font-size: 16px;
  outline: none;
  border: 2px solid ${({$borderColor, theme}) =>
  $borderColor ? theme.colors[$borderColor] : theme.colors.millionGray};
  &:focus {
    border: 2px solid ${({ $borderColorFocused, theme }) => $borderColorFocused ? theme.colors[$borderColorFocused] : theme.colors.dullViolet};
  }
  color: ${({$color, theme}) =>
  $color ? theme.colors[$color] : 'offBlack'};
  height: ${({$height}) =>
  $height ? $height : 'auto'};
  background-color: ${({$backgroundColor, theme}) =>
  $backgroundColor ? theme.colors[$backgroundColor]  : 'white'};

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
`;
