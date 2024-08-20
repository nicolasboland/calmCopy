import { FormLabel, OptionSelectContainer, SelectContainer } from "./styled"
import { InputOptionSelectProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"

export const InputOptionSelect = ({
  label,
  options,
  selectName,
  defaultOption,
  onChange
}: InputOptionSelectProps) => {
  return (
    <>
      {
        label &&
        <FormLabel>
          <Text>{label}</Text>
        </FormLabel>
      }
      <SelectContainer
        name={selectName}
        onChange={onChange}
        defaultValue={defaultOption ? selectName : ""}
      >
        {defaultOption && (
          <OptionSelectContainer value={selectName} disabled>
            -- Elija una opción --
          </OptionSelectContainer>
        )}

        {options.map((option, index) => (
          <OptionSelectContainer
            key={index}
            value={selectName === "provincia" ? option.value : option}
          >
            {selectName === "provincia" ? option.name : option}
          </OptionSelectContainer>
        ))}
      </SelectContainer>
    </>
  )
}
