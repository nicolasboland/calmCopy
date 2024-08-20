import styled from "styled-components";
import { theme } from "@/utils/Theme";

type ThemeColors = keyof typeof theme.colors;

export const DatePickerContainer = styled.div<{ $borderColor?: ThemeColors }>`
  position: relative;
  height: 101px;
  font-size: 16px;

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

  .react-datepicker {
    border: 2px solid ${({ theme }) => theme.colors.millionGray};
  }

  .react-datepicker__input-container {
    width: 100%;
    border-radius: 8px;
  }
  .react-datepicker__input-container input {
    width: 100%;
    padding: 15px;
    font-size: 0.9rem;
    outline: none;
    border: 2px solid
      ${({ $borderColor, theme }) =>
        $borderColor ? theme.colors[$borderColor] : "yellowCalm"};
    border-radius: 8px;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.yellowCalm};
    }
  }
`;

export const FormGroup = styled.div<{ $cols?: string }>`
  grid-column: ${(props) =>
    props.$cols ? `span ${props.$cols} / span 1` : "span 1 / span 1"};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media ${({ theme }) => theme.devices.mobile} {
    grid-column: span 1 / span 1;
  }
`;

export const ErrorContainer = styled.div`
  position: absolute;
  bottom: 0;
`;
