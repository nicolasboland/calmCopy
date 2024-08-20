import { LandingContent, Column, InnerColumn, Wrapper } from "./styled";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Images from "@/components/Atoms/Images/Images";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import HeaderButton from "@/components/Organisms/HeaderButton/HeaderButton";

const ColchonFeriaSection = () => {
    return (
        <LandingContent>
            <Wrapper>
                <Column>
                    <Titles
                    font="extraBold"
                    color="offBlack"
                    fontSize="1.2rem"
                    titleTag="h3"
                    >
                        La radiografía del colchón perfecto.
                    </Titles>

                    <Margin margin="0 0 20px 0"/>

                    <InnerColumn>
                        <Images 
                        alt="radiografia" 
                        src="https://calmessimple.com.ar/wp-content/uploads/2019/10/378x523_Radiograf%C3%ADaColch%C3%B3nPerfecto.jpg"
                        width="40%"
                        />

                        <Margin margin="0 20px 0 0"/>

                        <div>
                            <Titles
                            titleTag="h4"
                            font="bold"
                            fontSize="1.1em"
                            color="millionGray"
                            >
                                Capa de Confort
                            </Titles>

                            <Margin margin="0 0 1rem 0"/>

                            <Text
                            font="regular"
                            fontSize="0.75em"
                            lineHeight="1.2em"
                            color="millionGray"
                            >
                                Espuma soft HD de 4cm. de altura que aporta adaptabilidad / moldeado al cuerpo, confort y paso de aire (respirabilidad).
                            </Text>

                            <Margin margin="0 0 1rem 0"/>

                            <Titles
                            titleTag="h4"
                            font="bold"
                            fontSize="1.1em"
                            color="millionGray"
                            >
                                Capa de Soporte
                            </Titles>

                            <Margin margin="0 0 1rem 0"/>

                            <Text
                            font="regular"
                            fontSize="0.75em"
                            lineHeight="1.2em"
                            color="millionGray"
                            >
                                Espuma de alta densidad (super firme) de 30kg/m3. En el colchón Calm Original esta capa es de 18 cm de alto y en el Original Plus de 24 cm. Ambas alturas aportan la misma durabilidad, soporte y firmeza
                            </Text>
                        </div>
                    </InnerColumn>
                </Column>
                <Column>
                    <Titles
                    titleTag="h3"
                    font="extraBold"
                    fontSize="1.2rem"
                    color="offBlack"
                    >
                        Ni muy muy, ni tan tan...
                    </Titles>
                    
                    <Margin margin="0 0 20px 0"/>

                    <Text
                    font="regular"
                    fontSize="0.75em"
                    lineHeight="1.2em"
                    color="millionGray"
                    >
                        De las pruebas que realizamos y por las pocas devoluciones que recibimos, la mitad dice que el colchón es demasiado firme, y la otra mitad dice que es demasiado suave, por lo que estamos seguros de que hemos encontrado el punto "justo"
                    </Text>

                    <Margin margin="0 0 20px 0"/>

                    <Images alt="firmeza" src="https://calmessimple.com.ar/wp-content/uploads/2021/04/escala-416x121.png" />
                </Column>
            </Wrapper>

            <Margin margin="1rem 0 1rem 0"/>

            <HeaderButton 
            isProduct
            image="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a353d3ad-9c02-4662-34d0-e3cb1b164400/fit=cover"
            altImage="CompormisoDescansados"
            title={(
            <>
            Doná tu ex colchón <br />
            y le buscamos un <br />
            nuevo hogar.
            </>
            )}
            subTitle= "Ahora no 1, sino 2 van a descansar mejor"
            textButton="¡Quiero Donar!"
            redirectButton="https://calmessimple.com.ar/compromiso-descansados/"
            />
        </LandingContent>
      );
}

export default ColchonFeriaSection