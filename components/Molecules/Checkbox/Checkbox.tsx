import { useEffect, useState } from "react"
import {
  InnerCheckbox,
  OuterCheckbox,
  TextButton,
  CheckboxMap,
  SubText,
  Wrapper,
  CheckboxContainer
} from "./styled"
import { CheckboxProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import { WhiteCheck } from "@/utils/Icons"

const Checkbox = ({
  defaultState = false,
  action = () => {},
  isActive,
  disabled = false,
  text,
  subtext,
  maps,
  font = "regular",
  hasImages,
  isSquare,
  color
}: CheckboxProps) => {
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
    <CheckboxContainer $hasImages={hasImages}>
      <Wrapper>
        <OuterCheckbox onClick={toggleCheckbox} $disabled={disabled} $color={color} $isSquare={isSquare}>
          {isChecked && <InnerCheckbox $disabled={disabled} $color={color} $isSquare={isSquare}>{isSquare && WhiteCheck()}</InnerCheckbox>}
        </OuterCheckbox>
      </Wrapper>

      <TextButton onClick={toggleCheckbox} $disabled={disabled}>
        <Text
          font={font}
          fontSize="1.1em"
          color={disabled ? "millionGray" : "black"}
        >
          {text}
        </Text>
      </TextButton>

      {subtext && (
        <SubText>
          <Text color="parkPicnic" font="medium">{subtext}</Text>
        </SubText>
      )}
      {maps && <CheckboxMap>{maps}</CheckboxMap>}
    </CheckboxContainer>
  )
}

export default Checkbox
