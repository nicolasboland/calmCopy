import styled, { css, keyframes } from "styled-components";

const shake = keyframes`
  0% { background-color: #ffe6e6; }    
  25% { background-color: #ffcccc; }    
  50% { background-color: #ffcccc; }   
  75% { background-color: #FFE4E4; }   
  90% { background-color: #FFF4F4; }    
  100% { background-color: #ffffff; }  
`;

const errorStyle = css`
  animation: ${shake} 1s;
`;

export const Container = styled.div<{ $errors?: boolean }>`
  ${props => props.$errors && errorStyle}

`

export const FormLabel = styled.label<{ $isInputDirection?: boolean, $errors?: boolean }>`
  padding-left: 10px;
  pointer-events: none;
  user-select: none;
  cursor: text;
  position: absolute;
  left: 5px;
  top: ${({ $isInputDirection }) => $isInputDirection ? "17px" : "17px"};
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

  ${props => props.$errors && errorStyle}
`

export const MandatoryText = styled.span`
  color: ${(props) => props.theme.colors.yellowCalm};
`

export const Input = styled.input<{ $errors?: boolean }>`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium}, "Arial";
  padding: 16px 18px;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.millionGray};
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};

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
    font-size: 18px;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.yellowCalm};
    outline: ${(props) => {
      if (props.$errors) {
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
  ${props => props.$errors && errorStyle}
`