import Button from "@/components/Atoms/Buttons/Button";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { ShipmentOrderCard, OrderContainer, ContainerAnswer } from "./styled"
import { getSeguimiento } from "@/state/order/orderSelector"
import {  useSelector } from "react-redux"
import ShipmentOrder from "@/components/Molecules/ShipmentOrder/ShipmentOrder";
import DetailsOrder from "@/components/Molecules/DetailsOrder/DetailsOrder"
import SummaryCart from "@/components/Organisms/Checkout/ThankUcomponent/summaryCart/SummaryCart";
import GlobalSpinner from "@/components/Molecules/GlobalSpinner/GlobalSpinner";

interface IProps {
    handleReturnClick: () => void
}

const OrderInfoSeguimiento = ({handleReturnClick}: IProps) => {
    const orderData = useSelector(getSeguimiento)

    return (
        <>
        { 
            orderData ?
            <ContainerAnswer>
                <ShipmentOrderCard>
                    <ShipmentOrder
                    orderId={orderData.order_id}
                    title={orderData.steps_title}
                    createdDate={orderData.order_created_at}
                    confirmedDate={orderData.order_confirmed_at}
                    packedDate={orderData.order_packed_at}
                    deliveredDate={orderData.order_delivered_at}
                    estimatedDate={orderData.estimated_delivery_date}
                    provider={orderData.provider}
                    provider_tracking_id={orderData.provider_tracking_id}
                    />

                <OrderContainer>
                    <SummaryCart 
                    items={orderData.products}
                    coupons={orderData.coupons}
                    payment_method={orderData.metodo_de_pago}
                    subtotal={orderData.subtotal}
                    total={orderData.total}
                    shipping={{shipping_text: orderData.envio}}
                    couponDiscountSeguimiento={orderData.descuento}
                    isSeguimiento
                    />

                    <Margin margin=".5rem"></Margin>

                    <DetailsOrder text={orderData.order_formatted_billing_address}/>
                </OrderContainer>
                </ShipmentOrderCard>

                <Margin margin="3rem auto" marginMobile="0 auto 3rem auto">
                <Button
                    backgroundColor="yellowCalm"
                    textColor="white"
                    borderRadius="10px"
                    onClick={handleReturnClick}
                    borderColor="yellowCalm"
                    backgroundColorHover="white"
                    textColorHover="yellowCalm"
                    size="small"
                    font="bold"
                    >
                        Volver atrás
                    </Button>
                </Margin>
            </ContainerAnswer>
            : <GlobalSpinner/>
        }
        </>
    )
}

export default OrderInfoSeguimiento;