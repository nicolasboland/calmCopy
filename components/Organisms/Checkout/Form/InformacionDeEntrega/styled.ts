import { styled } from 'styled-components'

export const FormContainer = styled.section`
  display: flex;
  max-width: 632px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.offBlack};
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  font-weight: 600;

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 12px;
  }
`

export const FormGroup = styled.div<{ $cols?: string }>`
  grid-column: ${(props) =>
    props.$cols ? `span ${props.$cols} / span 1` : 'span 1 / span 1'};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

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
export const FormLabel = styled.label`
  font-size: 1rem;
`
export const FormInput = styled.input`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium}, "Arial";
  padding: 16px 18px;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.millionGray};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.dullViolet};
  }
  &:disabled {
    background-color: #f0f0f0;
    outline: 1px dashed ${({ theme }) => theme.colors.explosiveGray};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.millionGray};
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 12px;

  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: 1fr;
    gap: 12px;
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
`

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.dullViolet};
  margin-left: auto;
`

export const ToggleButton = styled.button<{$active?: boolean}>`
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

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  font-weight: 600;
  margin: 6px 0 20px;
`

export const OptionButton = styled.button<{$selected?: boolean}>`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  border-radius: 7px;
  border: none;
  outline: ${({ $selected, theme }) =>
    $selected
      ? `1px solid ${theme.colors.millionGray}`
      : `2px solid ${theme.colors.dullViolet}`};
  background-color: ${({ $selected }) => ($selected ? '#0000' : '#631F99')};
  align-items: center;

  p {
    font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
    font-weight: 600;
    text-align: left;
  }
`
export const GreenText = styled.span`
  color: #40914d;
`

export const FormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  font-weight: 600;
`

export const FormButton = styled.button`
  width: 100%;
  padding: 16px 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dullViolet};
  font-family: ${({ theme }) => theme.fonts.extraBold}, "Arial";
  font-size: 1.125rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const OptionsContainer = styled.div`
  border-radius: 9px;
  box-shadow: 0px 3px 12px 0px #0000001f;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  top: 60px;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: 1fr 1fr;
  }
`

export const OptionsPickerContainer = styled.div`
  position: relative;
  width: 100%;
`

export const Option = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular}, "Arial";
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lynxWhite};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 14px;
  }
`
