import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { CuotaSimple, CardsContainer } from "./styled"
import Images from "@/components/Atoms/Images/Images"
import Button from "@/components/Atoms/Buttons/Button"
import cardsPaymentMethods from "@/jsons/cardsPaymentMethods.json"
import CardPaymentMethod from "@/components/Molecules/CardPaymentMethod/CardPaymentMethod"
import { IProps } from "@/components/Molecules/CardPaymentMethod/types"

const MetodoDePagoLanding = () => {
    return (
        <>
        <Margin margin="2rem"/>

        <Titles
        fontSize="2.1rem"
        font="medium"
        color="yellowCalm"
        align="center"

        >
            Métodos de pago
        </Titles>

        <Margin margin="1rem 0 3rem 0" marginMobile="1rem">
        <Text
        fontSize="1.2rem"
        color="millionGray"
        align="center"
        responsiveMobile={{
            fontSize:"1rem"
        }}
        >
            Porque dormir bien tiene que ser simple, te damos la mejor y mas amplia financiación. Mirá todas las formas que tenes para comprar tu nuevo colchón.
        </Text>
        </Margin>

        <CuotaSimple>
            <Images 
            src="https://calmessimple.com.ar/wp-content/uploads/2024/02/cuota-simpe_logo_0-150x150.jpg"
            alt="cuotaSimple"
            width="170px"
            />

            <div>
                <Text
                    fontSize="1rem"
                    color="millionGray"
                    lineHeight="1.4"
                    responsiveMobile={{
                        fontSize:".8rem"
                    }}
                >
                    Podes pagar en 12 cuotas sin interés con todas las tarjetas de crédito que participan del<br/> programa*. 
                </Text>

                <Margin margin=".7rem"/>

                <Text
                    fontSize=".8rem"
                    color="millionGray"
                >
                    *Tarjetas Visa o MasterCard bancarias.
                </Text>

                <Margin margin="2rem"/>

                <Button
                size="none"
                height="40px"
                width="150px"
                backgroundColor="yellowCalm"
                backgroundColorHover="white"
                textColor="white"
                font="bold"
                fontSize="1.2rem"
                borderRadius="35px"
                textColorHover="yellowCalm"
                >
                    Ir a comprar
                </Button>
            </div>
        </CuotaSimple>

        <Margin margin="2rem" marginMobile="4rem"/>
        
        <CardsContainer>
        {
            cardsPaymentMethods.paymentMethods.map((card : IProps) => {
                return (
                    <CardPaymentMethod
                    key={card.altImage}
                    image={card.image}
                    altImage={card.altImage}
                    text={card.text}
                    subtext={card.subtext}
                    />
                )
            })
        }
        </CardsContainer>

        <Margin margin="3rem"/>

        <Titles
        titleTag="h4"
        fontSize="2.1rem"
        font="medium"
        color="yellowCalm"
        align="center"
        responsiveMobile={{
            fontSize:"1,8rem"
        }}

        >
            Otros medios de pago
        </Titles>

        <Margin margin=".5rem"/>

        <CardsContainer>
        {
            cardsPaymentMethods.others.map((card : IProps) => {
                return (
                    <CardPaymentMethod
                    key={card.altImage}
                    image={card.image}
                    altImage={card.altImage}
                    text={card.text}
                    subtext={card.subtext}
                    />
                )
            })
        }
        </CardsContainer>
        <Margin margin="4rem"/>
        </>
    )
}

export default MetodoDePagoLanding