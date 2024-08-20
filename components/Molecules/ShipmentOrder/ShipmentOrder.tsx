import { Container, TitleDate, ShipmentTracker, InstanceText, InstancesShipment } from "./styled"
import { IProps } from "./types"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Bar from "@/components/Atoms/Bar/Bar"
import { useEffect, useState } from "react"

const ShipmentOrder = ({ 
    orderId,
    title,
    createdDate,
    confirmedDate,
    packedDate,
    deliveredDate,
    estimatedDate,
    provider,
    provider_tracking_id,
    }: IProps) => {
    const [orderState, setOrderState] = useState<number>(0)
    const [trackingLink, setTrackingLink] = useState<string>()

    useEffect(() => {
        
        if (deliveredDate && ((provider || provider_tracking_id) && createdDate && confirmedDate && packedDate)) {
            setOrderState(5)
        } else if ((provider || provider_tracking_id) && createdDate && confirmedDate && packedDate) {
            setOrderState(4)
        } else if (createdDate && confirmedDate && packedDate) {
            setOrderState(3)
        } else if (createdDate && confirmedDate) {
            setOrderState(2)
        } else if (createdDate) {
            setOrderState(1)
        }

      if (provider && provider_tracking_id) {
        if (provider.toLocaleLowerCase() == 'beetrack') {
            setTrackingLink("https://calm.dispatchtrack.com/widget/OwhJ3VmMCdHyhMeB_1GDUQ")
        } else if (provider.toLocaleLowerCase() == 'urbano') {
            setTrackingLink(`https://wbs.urbano.com.ar/cespecifica/?shi_codigo=${provider_tracking_id.substring(0, 4)}&cli_codigo=${provider_tracking_id.substring(4, 14)}`)
        } else if (provider.toLocaleLowerCase() == 'buspack') {
            setTrackingLink("https://www.buspack.com.ar/gestiona-tu-envio/seguir-envio/")
        } else if (provider.toLocaleLowerCase() == 'cruzdelsur' || provider.toLocaleLowerCase() == 'cruz del sur') {
            /* setTrackingLink(`http://servicios.cruzdelsur.com/FormulariosWeb/Seguimiento.aspx?que=11&#038;nic=${provider_tracking_id}&#038;ods=&#038;remito=&#038;cuenta=`) */
            setTrackingLink(`https://www.cruzdelsur.com/herramientas_seguimiento_resultado.php?nic=${provider_tracking_id}`)
        } else if (provider.toLocaleLowerCase() == 'southpost') {
            setTrackingLink(`https://epresis.southpost.com.ar/seguimiento_cliente/224osRtWC/${orderId}/`) 
        } else if (provider.toLocaleLowerCase() == 'andreani') {
            setTrackingLink(`https://www.andreani.com/#!/informacionEnvio/${provider_tracking_id}/`)
        } else if (provider.toLocaleLowerCase() == 'andesmar') {
            setTrackingLink(`https://andesmarcargas.com/seguimiento.html?numero=${orderId}&tipo=remito&cod=`)
        }
      }
    },[]) 

    return (
    <Container>
        <TitleDate>
            <Titles
            font="regular"
            color="white"
            fontSize="1em"
            >
                {title}
            </Titles>
        </TitleDate>

        <Margin margin="5px">
            <Text
                font="regular"
                color="millionGray"
                align="right"
                >
                    Orden: #{orderId}
            </Text>
        </Margin>

        <ShipmentTracker>
            <Bar cantidad={orderState} title="" isVertical isCircle></Bar>

            <InstancesShipment>
                <InstanceText>
                    <Text
                        font="bold"
                    >
                        Pedido realizado
                    </Text>

                    <Text
                        font="regular"
                        fontSize=".7rem"
                        color="millionGray"
                    >
                        {createdDate}
                    </Text>
                </InstanceText>

                <InstanceText>
                    <Text
                        font={confirmedDate ? "bold" : "regular"}
                        color={confirmedDate ? "offBlack" : "millionGray"}
                    >
                        Pago confirmado
                    </Text>

                    { 
                        confirmedDate && 
                        <Text
                        font="regular"
                        fontSize=".7rem"
                        color="millionGray"
                        >
                            {confirmedDate}
                        </Text>
                    }
                </InstanceText>

                <InstanceText>
                    <Text
                        font={packedDate ? "bold" : "regular"}
                        color={packedDate ? "offBlack" : "millionGray"}
                    >
                        Pendiente de despacho
                    </Text>

                    { 
                        packedDate && 
                        <Text
                        font="regular"
                        fontSize=".7rem"
                        color="millionGray"
                        >
                            {packedDate}
                        </Text>
                    }
                </InstanceText>

                <InstanceText>
                    <Text
                        font={(provider || provider_tracking_id) ? "bold" : "regular"}
                        color={(provider || provider_tracking_id) ? "offBlack" : "millionGray"}
                    >
                        En viaje con {provider && provider}
                    </Text>
                    {
                        trackingLink && 
                        <Text
                        textTag="a"
                        link={trackingLink}
                        font="regular"
                        fontSize=".8rem"
                        color="auberginePerl"
                        target="_blanck"
                        >
                            Link de seguimiento
                        </Text>
                    }
                    {
                        provider_tracking_id && (
                            provider && provider.toLocaleLowerCase() == 'buspack' ?
                            <Text
                            font="regular"
                            fontSize=".7rem"
                            color="millionGray"
                            >
                                En la web de Buspack, selecciona "Por Comprobante" y coloca tu numero de seguimiento:
                                {provider_tracking_id}
                            </Text> 
                            : <Text
                            font="regular"
                            fontSize=".7rem"
                            color="millionGray"
                            >
                                N° de Seguimiento {provider_tracking_id}
                            </Text>
                        )
                    }
                </InstanceText>

                <InstanceText>
                    { 
                        estimatedDate ?
                        <>
                        <Text
                            font={packedDate ? "bold" : "regular"}
                            color={packedDate ? "offBlack" : "millionGray"}
                            >
                                Entregado
                        </Text>
                        <Text
                            font="regular"
                            fontSize=".7rem"
                            color="millionGray"
                            >
                                {estimatedDate}
                            </Text>
                        </>
                    
                        : deliveredDate &&
                        <Text
                        font={packedDate ? "bold" : "regular"}
                        color={packedDate ? "offBlack" : "millionGray"}
                        >
                            Entregado
                        </Text>
                    }
                </InstanceText>
            </InstancesShipment>
        </ShipmentTracker>

    </Container>
    )
}

export default ShipmentOrder;