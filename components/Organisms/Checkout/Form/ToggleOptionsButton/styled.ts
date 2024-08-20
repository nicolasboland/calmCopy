import { styled } from 'styled-components'

export const StyledButton = styled.button<{ $active: boolean }>`
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 16px 20px;
  max-height: 56px;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.millionGray};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.lynxWhite : theme.colors.white};
  color:  ${({ theme }) => theme.colors.offBlack};

  p {
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.medium}, "Arial";
    color:  ${({ theme }) => theme.colors.offBlack} !important;
  }

  svg:last-child {
    margin-left: auto;
    transform: ${({ $active }) =>
      $active ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.2s;
  }
`
