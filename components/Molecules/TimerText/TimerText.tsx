import Text from "@/components/Atoms/Typography/Text"
import { IProps } from "./types"
import { Container } from "./styled"

const Countdown = ({ text, number }: IProps) => {

  return (
    <Container>
      <Text textTag="span" font="extraBold"  fontSize=".8em" color="white" align="center" letterSpacing="1px" responsiveMobile={{ fontSize:"0.8rem"}}>
        {number}
      </Text>
      <Text textTag="span" font="light" fontSize=".8em" color="white" align="center"  responsiveMobile={{ fontSize:"0.8rem"}}>
        {text}
      </Text>
    </Container>

  );
};

export default Countdown;
