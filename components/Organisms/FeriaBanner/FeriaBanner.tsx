import { Wrapper, LandingContent } from "./styled";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Separator from "@/components/Atoms/Separator/Separator";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import PostalInput from "@/components/Molecules/PostalInput/PostalInput";
import { Dispatch, SetStateAction } from "react"

const FeriaBanner = ({showCPValidator, setFeriaATCEnabled}: {showCPValidator?: boolean, setFeriaATCEnabled?: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <LandingContent>
            <Wrapper>
                <Margin margin="1rem 0 1rem 0"/>

                <Titles
                font="extraBold"
                align="center"
                fontSize="2.1em"
                titleTag="h2"
                color="offBlack"
                width={60}
                responsiveMobile={{
                    fontSize:"1.5em",
                    width:"100%"
                }}
                >
                    Todxs merecemos una segunda oportunidad, el colchón Calm también
                </Titles>

                <Margin margin="1rem 0 1rem 0"/>

                <Text
                font="regular"
                fontSize="1.1em"
                lineHeight="1.2em"
                color="offBlack"
                width={83}
                hasStrong
                align="center"
                responsiveMobile={{
                    fontSize:"1em",
                    width:"100%"
                }}
                >
                    Nuestra <b>Feria Calm</b> es una alternativa increíble para vos que buscás el colchón mejor puntuado de Argentina con un gran descuento. Ofrecemos <b>colchones abiertos</b> en perfecto estado a precio amigx, con un <b>50% de descuento</b>.
                </Text>

                {showCPValidator &&
                    <>
                        <Separator/>

                        <div id="cpFeria">
                            <Titles
                            font="extraBold"
                            fontSize="2.1em"
                            align="center"
                            titleTag="h3"
                            color="offBlack"
                            responsiveMobile={{
                                fontSize:"1.5em",
                                width:"100%"
                            }}
                            >
                                Ingresá tu código postal
                            </Titles>
                        </div>
                        
                        <Margin margin="1rem 0 1rem 0"/>
                        
                        <Text
                        font="regular"
                        fontSize="1.1em"
                        lineHeight="1.2em"
                        color="offBlack"
                        width={83}
                        hasStrong
                        align="center"
                        responsiveMobile={{
                            fontSize:"1em",
                            width:"100%"
                        }}
                        >
                            La Feria solo está habilitada en algunas zonas exclusivas de Buenos Aires a donde llegamos con nuestro propio servicio de entrega, ingresá tu CP <b>para saber si entregamos en tu domicilio</b>.
                        </Text>

                        <Margin margin="1rem auto">
                            <PostalInput
                                alertMessage="Este servicio esta limitado a algunas zonas de Buenos Aires, ingresá tu CP para saber si está disponible en tu domicilio"
                                isFeria
                                setFeriaATCEnabled={setFeriaATCEnabled}
                            />
                        </Margin>
                    </>
                }
            </Wrapper>
        </LandingContent>
      );
}

export default FeriaBanner