import styled from "styled-components"
import { theme } from "@/utils/Theme"

export const OptionButton = styled.button<{ $selected: boolean }>`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  border-radius: 7px;
  border: none;
  outline: ${({ $selected, theme }) =>
    $selected
      ? `1px solid ${theme.colors.millionGray}`
      : `2px solid ${theme.colors.yellowCalm}`};
  background-color: ${({ $selected }) =>
    $selected ? `${theme.colors.white}` : `${theme.colors.madForMango}26`};
  align-items: center;
  cursor: pointer;

  p {
    text-align: left;
  }
`
