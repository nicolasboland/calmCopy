import { useEffect, useState } from 'react'
import { Text, CheckboxContainer, OuterCheckboxOrange, InnerCheckboxOrange, GreenText, TextContainer, GrayText } from './styled'
import { WhiteCheck } from "../ui/assets"
import { IProps } from "./types"

function PurpleCheckbox({
  defaultState = false,
  action = () => {},
  isActive,
  disabled = false,
  text,
  isSquare,
  greenText,
  withGreenText
}: IProps) {
  const [isChecked, setIsChecked] = useState(defaultState)

  useEffect(() => {
    isActive ? setIsChecked(true) : setIsChecked(defaultState)
  }, [isActive])

  const toggleCheckbox = () => {
      setIsChecked(!isChecked)
      if (!disabled) {
        action()
      }
  }

  return (
    <>
      <CheckboxContainer>
        <OuterCheckboxOrange onClick={toggleCheckbox} $disabled={disabled} $isSquare={isSquare}>
          {isChecked && <InnerCheckboxOrange $disabled={disabled} $isSquare={isSquare}>{isSquare && WhiteCheck()}</InnerCheckboxOrange>}
        </OuterCheckboxOrange>
      </CheckboxContainer>
      <TextContainer>
        <Text onClick={toggleCheckbox} $disabled={disabled}>{text}</Text>
        {
          greenText && (
            withGreenText ? (
              <GreenText onClick={toggleCheckbox}>{greenText}</GreenText>
            ) : (
              <GrayText onClick={toggleCheckbox}>{greenText}</GrayText>
            )
          )
          
        }
      </TextContainer>
    </>
  )
}

export default PurpleCheckbox
