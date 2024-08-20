import Icons from "@/components/Atoms/Icons/Icons"
import Text from "@/components/Atoms/Typography/Text"
import { OptionButton } from "./styled"
import { CheckboxIsPickupProps } from "./types"
import Spinner from "@/components/Atoms/Spinner/Spinner"

const CheckboxIsPickUp = ({
  text,
  subText,
  subTextShow = true,
  icon,
  isSelected,
  isLoading,
  formCP,
  onClick,
  disabled
}: CheckboxIsPickupProps) => {
  return (
    <OptionButton
      type="button"
      $selected={isSelected}
      onClick={onClick}
      disabled={disabled}
    >
      <Icons>{icon}</Icons>
      <div>
        <Text font="bold">{text}</Text>
        <Text textTag="span" color="parkPicnic">
          {formCP === 4 ? (
            isLoading ? (
              <Spinner isBlack />
            ) : (
              subText
            )
          ) : (
            <Text textTag="span" color="millionGray">
              {isLoading ? (
              <Spinner isBlack />
            ) : ( disabled ? "Sin stock" : (subTextShow && "Completá tus datos para continuar"))}
            </Text>
          )}
        </Text>
      </div>
    </OptionButton>
  )
}

export default CheckboxIsPickUp
