import {
    Container,
    InfoContainer,
    SizeContainer
} from "./styled"
import { formatNumber } from "@/utils/formatPrices"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { IProps } from "./types"

const ATCFixesPriceVisor = ({
    nrFees,
    title,
    size,
    price,
    regularPrice,
    isCategory,
    quantity
    }: IProps) => {
        
    const regex = /\((.*?)\)/g;
    const partes = size && size.split(regex);
    return (
        <Container>
            <InfoContainer $isCategory={isCategory || typeof quantity !== 'undefined'}>
                <Margin margin="0 4px 0 0">
                    <Text
                    font="bold"
                    letterSpacing="-0.54px"
                    fontSize={isCategory ? "1.4rem" : "1.1rem"}
                    responsiveMobile={{
                        fontSize:isCategory ? "1.18rem" : "1rem"
                    }}
                    >
                    {title} {" "}
                    </Text>
                </Margin>

                {
                    quantity ? 
                    <Margin margin="0 4px 0 0">
                        <Text
                        font="medium"
                        fontSize="0.9rem" 
                        responsiveMobile={{
                            fontSize:"0.8rem" 
                        }}
                        >
                            {quantity} {quantity > 1 ? 'Unidades' : 'Unidad'}
                        </Text>
                    </Margin>
                    : !isCategory && partes && (
                        <>
                            <Margin margin="0 4px 0 0">
                                <Text
                                font="medium"
                                fontSize="0.9rem" 
                                responsiveMobile={{
                                    fontSize:"0.8rem" 
                                }}
                                >
                                    -  {partes[0]}
                                </Text>
                            </Margin>
    
                            {
                                partes[1] !== undefined && (
                                    <Text
                                    font="regular"
                                    color="millionGray"
                                    fontSize="0.9rem" 
                                    responsiveMobile={{
                                        fontSize:"0.8rem" 
                                    }}
                                    >
                                    {" "}
                                    ({partes[1]})
                                    </Text>
                                )
                            }
                        </> )
                }
                {
                    isCategory && partes && 
                    <SizeContainer>
                        <Text
                        font="bold"
                        fontSize="1.1rem" 
                        responsiveMobile={{
                            fontSize:"1rem" 
                        }}
                        >
                            {partes[0]}
                        </Text>

                        {
                            partes[1] !== undefined && (
                                <Text
                                font="regular"
                                color="millionGray"
                                fontSize="0.9rem" 
                                >
                                {" "}
                                ({partes[1]})
                                </Text>
                            )
                        }
                    </SizeContainer>
                }
            </InfoContainer>

            {
                !isCategory && 
                <>
                <InfoContainer>
                    <Text
                    font="bold"
                    fontSize={isCategory ? "1.3rem" : "1.1rem"}
                    color="carbon"
                    >
                        ${formatNumber(price)}
                    </Text>
                    <Margin margin="0 5px 0 0"/>
                    { 
                        (price < regularPrice) &&
                    <Text
                    font="regular"
                    fontSize={isCategory ? ".9rem" : "1em"}
                    color="millionGray"
                    textDecoration="line-through"
                    >
                        ${formatNumber(regularPrice)}
                    </Text>
                    }      
                </InfoContainer>

                {
                    nrFees &&
                    <Text 
                        textTag="span" 
                        font="medium"
                        fontSize={isCategory ? "1rem" : "0.8rem"}
                        color="parkPicnic"
                        responsiveMobile={{
                            fontSize:isCategory ? ".9rem" : "0.6rem"
                        }}
                        >
                        en {nrFees} cuotas sin interés de ${formatNumber(Math.floor(price / nrFees))}
                    </Text>
                }
                </>
            }

           
        </Container>
    )
}

export default ATCFixesPriceVisor;