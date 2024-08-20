import { Container } from "./styled"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Images from "@/components/Atoms/Images/Images"
import Button from "@/components/Atoms/Buttons/Button"
import { IProps } from "./types"
import { productURLRedirectionById } from "@/utils/productURLById";

const CardPaymentMethod = ({image,
    altImage,
    text,
    subtext}: IProps) => {

    return (
        <Container>
            <Images 
            src={image}
            alt={altImage}
            width="295px"
            responsiveMobile={{
                width:"170px"
            }}
            />

            <Margin margin="1rem"/>

            {
                text && 
                <Text
                    font="medium"
                    fontSize="1.2rem"
                    color="yellowCalm"
                    responsiveMobile={{
                        align:"center",
                        width:"80%",
                        fontSize:"1.1rem"
                    }}
                >
                    {text}
                </Text>
            }

            <Margin margin=".2rem"/>

            {
                subtext && 
                <Text
                    fontSize="1.1rem"
                    color="millionGray"
                    responsiveMobile={{
                        fontSize:".8rem"
                    }}
                >
                    {subtext}
                </Text>
            }

            <Margin margin=".5rem"/>

            <Button
                size="none"
                href={productURLRedirectionById("334")}
                height="40px"
                width="150px"
                backgroundColor="auberginePearl"
                backgroundColorHover="white"
                textColor="white"
                font="bold"
                fontSize="1.2rem"
                borderRadius="35px"
                textColorHover="yellowCalm"
                >
                    Ir a comprar
                </Button>
        </Container>
    )
}

export default CardPaymentMethod;