import { styled } from 'styled-components'

export const FormLabel = styled.label<{ $isDirection?: boolean }>`
  padding-left: 10px;
  pointer-events: none;
  position: absolute;
  left: 5px;
  /* top: ${({ $isDirection }) => $isDirection ? "15px" : "15px"}; */
  top: 16px;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.white};

  a {
    color: ${({ theme }) => theme.colors.dullViolet};
    margin-left: auto;
    font-size: 0.875rem;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.medium};
  }
`

export const FormInput = styled.input<{ $errors?: string }>`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium}, "Arial";
  padding: 16px 18px;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.millionGray};
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};

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

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.yellowCalm};
    outline: ${(props) => {
      if (props.$errors === 'error') {
        return '2px solid red'
      }
    }};
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    opacity: 1;
    transform: scale(0.75) translateY(-70%) translateX(-14px);
    top: 0;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.snowFlake};
    outline: 1px dashed ${({ theme }) => theme.colors.explosiveGray};
    color: ${({ theme }) => theme.colors.millionGray};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
`

export const MandatoryText = styled.span`
  color: ${(props) => props.theme.colors.yellowCalm};
`