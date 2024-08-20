import Text from "@/components/Atoms/Typography/Text"
import DatePicker from "react-datepicker"
import { FormGroup, DatePickerContainer, ErrorContainer } from "./styled"
import { useState } from "react"
import { InputDatePickerTarjetaProps } from "./types"

const InputDatePickerTarjeta = ({
  formData,
  setFormData,
  disabled
}: InputDatePickerTarjetaProps) => {
  const [fechaVencimiento, setFechaVencimiento] = useState<Date>()
  const today = new Date()

  const handleFechaVencimientoChange = (date: any) => {
    if (date instanceof Date) {
      setFechaVencimiento(date)
      setFormData({
        ...formData,
        fechaVencimiento: date,
        fechaVencimientoError: ""
      })
    }
  }

  return (
    <DatePickerContainer
      $borderColor={formData.fechaVencimientoError ? "rareRed" : "millionGray"}
    >
      <FormGroup>
        <DatePicker
          selected={fechaVencimiento}
          onChange={(e) => handleFechaVencimientoChange(e)}
          onChangeRaw={(e: any) => {
            if (
              !/^[\/\d]*$/.test(e.target.value) ||
              e.target.value.length > 5 ||
              /^\/+$/g.test(e.target.value)
            ) {
              e.preventDefault()
              setFormData({
                ...formData,
                fechaVencimientoError: "Formato Invalido"
              })
            } else {
              if (e.target.value.length === 5) {
                const monthAndYear = e.target.value.match(/.{1,2}/g)
                const date = new Date(
                  20 + monthAndYear[1],
                  monthAndYear[0] - 1,
                  1
                )
                if (date < today) {
                  setFormData({
                    ...formData,
                    fechaVencimientoError: "No puede ser anterior a hoy"
                  })
                } else if (monthAndYear[0] - 1 > 11) {
                  setFormData({
                    ...formData,
                    fechaVencimientoError: "Formato Invalido"
                  })
                } else {
                  setFechaVencimiento(date)
                  setFormData({
                    ...formData,
                    fechaVencimiento: date,
                    fechaVencimientoError: ""
                  })
                }
              }
            }
          }}
          dateFormat="MM/yy"
          placeholderText="MM/AA"
          name="expiredDate"
          showMonthYearPicker
          minDate={today}
          disabled={disabled}
        />
      </FormGroup>
      {formData.fechaVencimientoError && (
        <ErrorContainer>
          <Text color="rareRed" fontSize="0.9rem">
            {formData.fechaVencimientoError}
          </Text>
        </ErrorContainer>
      )}
    </DatePickerContainer>
  )
}

export default InputDatePickerTarjeta
