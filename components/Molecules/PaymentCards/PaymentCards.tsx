import { 
  Container,
} from "./styled";
import Icons from "@/components/Atoms/Icons/Icons";
import { IpropsIcons } from "./types"
import {
  Visa,
  MasterCard,
  Amex,
  Naranja
} from "@/utils/Icons"

const PaymentCards = () => {

  const images = [
    "Visa",
    "MasterCard",
    "Amex",
    "Naranja"
  ]

  const icons: IpropsIcons = {
    Visa,
    MasterCard,
    Amex,
    Naranja
  }

  return (
    <Container>
      {
        images.map((item, index) => {
          const IconComponent = icons[item];
          return (
            <Icons key={index}>
                <IconComponent />
            </Icons>
          )
        })
      }
    </Container>
  );
};

export default PaymentCards;
