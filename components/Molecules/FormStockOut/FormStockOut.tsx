import MailChimpForm from "@/components/Molecules/MailchimpForm/MailchimpForm";
import { FormStockOutContainer } from "./styled"
import Text from "@/components/Atoms/Typography/Text"
import { IProps } from "./types"

const FormStockOut = ({ tag }: IProps) => {
  return (
    <FormStockOutContainer>
      <Text color="dullViolet" align="center" font="extraBold">
        Ups, por ahora este producto está agotado. Dejanos tu mail acá y te
        avisamos apenas esté disponible.
      </Text>
      <MailChimpForm tag={tag} btnText="avisame" />
    </FormStockOutContainer>
  )
}

export default FormStockOut
