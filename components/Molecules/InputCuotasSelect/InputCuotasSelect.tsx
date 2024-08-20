import Text from "@/components/Atoms/Typography/Text"
import { Option, OptionsContainer, OptionsPickerContainer } from "./styled"
import ToggleOptionsButton from "@/components/Atoms/ToggleOptionsButton/ToggleOptionsButton"
import { useState } from "react"
import { InputCuotasSelectProps } from "./types"
import Spinner from "@/components/Atoms/Spinner/Spinner"

const InputCuotasSelect = ({
  loadingPay,
  cuotasLoading,
  formData,
  setFormData,
  cuotas,
  loadingCardInfo
}: InputCuotasSelectProps) => {
  const [isCuotas, setIsCuotas] = useState(false)

  return (
    <>
      <OptionsPickerContainer>
        <ToggleOptionsButton
        borderColor="millionGray"
          activeCondition={isCuotas}
          action={() => {
            setIsCuotas(!isCuotas)
          }}
          innerText={formData.preferedCuotas.cuota}
          disabled={loadingPay || cuotasLoading}
        >
          {loadingCardInfo
            ? <Spinner isBlack/>
            : isCuotas && (
                <OptionsContainer>
                  {cuotas.map((c) => (
                    <Option
                      key={c.cuota}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          preferedCuotas: {
                            cuota: c.cuota,
                            installment: c.installment
                          }
                        })
                      }
                    >
                      <Text fontSize='0.9rem'>{c.cuota}</Text>
                    </Option>
                  ))}
                </OptionsContainer>
              )}
        </ToggleOptionsButton>
      </OptionsPickerContainer>
    </>
  )
}

export default InputCuotasSelect
