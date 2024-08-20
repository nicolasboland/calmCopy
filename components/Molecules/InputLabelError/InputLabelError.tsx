import { InputLabelErrorProps } from "./types"
import Input from "@/components/Atoms/Input/Input"
import Text from "@/components/Atoms/Typography/Text"
import { ContainerInput, FormLabel } from "./styled"

export const InputLabelError = ({ error, input }: InputLabelErrorProps) => {
  return (
    <ContainerInput>
      <FormLabel>
        <Text>{input.label}</Text>
      </FormLabel>
      <Input
        type="text"
        name={input.name}
        width={input.width ? input.width : "100%"}
        placeholder={input.placeholder}
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        required={input.required}
        disabled={input.disabled}
        error={error}
        data-decidir={input.dataDecidir}
      />
      {error && (
        <Text color="rareRed" fontSize="0.9rem">
          {input.error}
        </Text>
      )}
    </ContainerInput>
  )
}
