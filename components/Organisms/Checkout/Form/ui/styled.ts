import { css, keyframes, styled } from 'styled-components'

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

export const FormContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.offBlack};
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  font-weight: 600;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 100%;
  }
`

export const FormGroup = styled.div<{ $cols?: string }>`
  grid-column: ${(props) =>
    props.$cols ? `span ${props.$cols} / span 1` : 'span 1 / span 1'};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 3px 0;
  gap: 6px;

  @media ${({ theme }) => theme.devices.mobile} {
    grid-column: span 1 / span 1;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FormCheckout= styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const FormLabel = styled.label<{ $isDirection?: boolean, $errors?: boolean }>`
  padding-left: 10px;
  pointer-events: none;
  user-select: none;
  cursor: text;
  position: absolute;
  left: 5px;
  top: ${({ $isDirection }) => $isDirection ? "18px" : "16px"};
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

export const FormInput = styled.input<{ $errors?: boolean }>`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium}, "Arial";
  padding: 16px 18px;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.millionGray};
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.yellowCalm};
    outline: ${(props) => {
      if (props.$errors ) {
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

export const FormInputCard = styled.input<{ $errors?: string }>`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  padding: 16px 18px;
  border-radius: 6px;
  border: none;
  outline: ${(props) => {
    if (props.$errors === 'input completado') {
      return '2px dashed #CDCDCD'
    } else {
      return '1px solid  #999'
    }
  }};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.dullViolet};
    outline: ${(props) => {
      if (props.$errors === 'error') {
        return '2px solid red'
      }
      if (props.$errors === 'input completado') {
        return '2px dashed #CDCDCD'
      }
    }};
  }
  &:disabled {
    background-color: #f0f0f0;
    outline: 1px dashed ${({ theme }) => theme.colors.explosiveGray};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.millionGray};
  }
  background-color: ${(props) => {
    if (props.$errors === 'input completado') {
      return '#F2F2F2'
    }
  }};
  color: ${(props) => {
    if (props.$errors === 'input completado') {
      return '#CDCDCD'
    }
  }};
`

export const FormGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 12px;

  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

export const Checkbox = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.dullViolet};
  position: relative;

  div {
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.dullViolet};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`

export const OptionalTag = styled.span`
  color: ${({ theme }) => theme.colors.millionGray};
  font-size: .8rem;
`

export const StyledLink = styled.div`
  margin-left: auto;
`

export const ToggleButton = styled.button<{ $active: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.millionGray};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.lynxWhite : theme.colors.white};

  p {
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.medium}, "Arial";
  }

  svg:last-child {
    margin-left: auto;
    transform: ${({ $active }) =>
      $active ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.2s;
  }
`

export const CheckboxContainer = styled.div<{ $disabled?: boolean, $isSelected?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  font-weight: 600;
  margin: ${({ $isSelected }) => $isSelected ? "15px 0 20px" : "5px 0 0px"};
  p {
    color: ${({ theme, $disabled }) => $disabled && theme.colors.millionGray};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    margin: 5px 0 5px;
  }
`

export const CheckboxContainerPayment = styled.div<{ $disabled?: boolean, $isSelected?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-column-gap: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  font-weight: 600;
  margin: ${({ $isSelected }) => $isSelected ? "15px 0 20px" : "10px 0 5px"};
  p {
    color: ${({ theme, $disabled }) => $disabled && theme.colors.millionGray};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    margin: 5px 0 20px;
  }
`
export const OptionButton = styled.button<{ $selected: boolean }>`
  width: 100%;
  padding: 16px 13px;
  display: flex;
  gap: 12px;
  cursor: pointer;
  border-radius: 7px;
  border: none;
  outline: ${({ $selected, theme }) =>
    $selected
      ? `1px solid ${theme.colors.millionGray}`
      : `2px solid ${theme.colors.yellowCalm}`};
  background-color: ${({ $selected }) => ($selected ? '#0000' : "rgba(245, 162, 3, 0.15)")};
  align-items: center;
  color:  ${({ theme }) => theme.colors.offBlack};

  div {
    text-align: left;
  }

  &:disabled {
    cursor: not-allowed;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
    font-weight: 600;
    text-align: left;
    font-size: 16px;
    color:  ${({ theme }) => theme.colors.offBlack} !important;
  }
`

export const GreenText = styled.span<{ $hasImages?: boolean}>`
  color: #40914d;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const ShippingText = styled.span`
  color: #40914d;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 600;
`

export const FormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  font-weight: 600;
`

export const FormButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 16px 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellowCalm};
  font-family: ${({ theme }) => theme.fonts.extraBold}, "Arial";
  font-size: 1.125rem;
  border-radius: 500px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #dfdfdf;
    color: ${({ theme }) => theme.colors.millionGray};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.orangePop};
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`

export const OptionsContainer = styled.div<{$two_column?: boolean}>`
  border-radius: 9px;
  box-shadow: 0px 3px 12px 0px #0000001f;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  top: 60px;
  left: 0;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  max-height: 250px;
  display: grid;
  grid-template-columns: ${(props) => (props.$two_column ? "1fr 1fr" : "1fr")};

  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: ${(props) => (props.$two_column ? "1fr 1fr" : "1fr")};
  }
`

export const OptionsPickerContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
  cursor: pointer;
`

export const Option = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  padding: 10px;
  cursor: pointer;
  /* transition: background-color 0.3s ease; */
  transition: border 0.1s ease;
  &:hover {
    /* background-color: ${({ theme }) => theme.colors.yellowCalm}; */
    border: 4px solid ${({ theme }) => theme.colors.yellowCalm}
  }

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 14px;
  }
`
export const HRComponent = styled.hr`
  color: ${(props) =>
    props.theme.colors.millionGray}; /* Cambia esto al color deseado */
  width: 75%;
  margin: 20px auto 0 auto;
`
export const DivModo=styled.div`
  height: fit-content;
  /* position: relative; */
/* margin-top: 4.8px; */
`

export const ModalDonarColchonInfo = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 100;
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity  0.6s;
  border-radius: 10px;
  box-shadow: 6px 6px #0000001f;
  /* width: 20rem; */
  p {
    font-family: ${(props) => props.theme.fonts.regular};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    /* top: 60%; */
    /* top: 1rem; */
    right: 1rem;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.rareRed};
  font-family: ${(props) => props.theme.fonts.bold};
`

export const MandatoryText = styled.span`
  color: ${(props) => props.theme.colors.yellowCalm};
`