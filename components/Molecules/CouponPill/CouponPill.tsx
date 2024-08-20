import { Container, TextContainer } from "./styled"
import Text from "@/components/Atoms/Typography/Text";
import Icons from "@/components/Atoms/Icons/Icons";
import { Coupon } from "@/utils/Icons"

const CouponPill = () => {
    return (
        <Container>
            <Icons
            padding="7px 9px"
            height="35px"
            width="35px"
            responsiveMobile={{
                width:"30px",
                height:"30px"
            }}
            >
                <Coupon/>
            </Icons>

            <TextContainer>
                <Text
                font="regular"
                color="white"
                fontSize=".9rem"
                hasStrong
                responsiveMobile={{
                    fontSize:".7rem"
                }}
                >
                    <b>$15.000 OFF</b> extra con cupón <br />
                </Text>

                <Text
                font="regular"
                color="white"
                fontSize="1.05rem"
                hasStrong
                responsiveMobile={{
                    fontSize:".8rem"
                }}
                >
                    <b>LANZAMIENTO-SOÑADO</b>
                </Text>
            </TextContainer>
        </Container>
    )
}

export default CouponPill;