import { InputLabelErrorProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import { FormLabel, MandatoryText, Input, Container} from "./styled"
import { useRef } from "react";

export const InputMovingPH = ({ error, input, isInputDirection, isMandatory, errorMark}: InputLabelErrorProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  return (
    <Container $errors={errorMark}>
      <Input
        id={input.id}
        placeholder=" "
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        name={input.name}
        ref={inputRef}
        $errors={errorMark}
      />
      <FormLabel $isInputDirection={isInputDirection} onClick={handleLabelClick} $errors={errorMark}>
        <Text
        fontWeight={600}
        color="offBlack"
        > 
          {input.label} 
          {isMandatory && <MandatoryText>*</MandatoryText>}
        </Text>
      </FormLabel>
      {error && (
        <Text color="rareRed" fontSize="0.9rem">
          {input.error}
        </Text>
      )}
    </Container>
  )
}
