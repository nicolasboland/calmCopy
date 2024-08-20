import { InputMaskLabelErrorProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import { CardImgContainer, StyledInputMask } from "./styled"
import Images from "@/components/Atoms/Images/Images"

export const InputMaskLabelError = ({
  value,
  onChange,
  disabled,
  onBlur,
  formData,
  imagen
}: InputMaskLabelErrorProps) => {
  return (
    <>
      <StyledInputMask
        data-decidir="card_number"
        mask="9999-9999-9999-9999"
        maskChar=""
        type="text"
        id="creditCard"
        name="card"
        value={value}
        onChange={onChange}
        placeholder="Número de la tarjeta *"
        disabled={disabled}
        onBlur={onBlur}
        $borderColor={formData.cardError != "" ? "rareRed" : "millionGray"}
      />

      {imagen && (
        <CardImgContainer>
          <Images src={imagen} alt="Logo Tarjeta" width="2.2rem" />
        </CardImgContainer>
      )}

      {formData.cardError && (
        <Text color="rareRed" fontSize="0.9rem">
          {formData.cardError}
        </Text>
      )}
    </>
  )
}
