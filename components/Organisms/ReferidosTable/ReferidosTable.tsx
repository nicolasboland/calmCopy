import {
    ContainerTabla,
    ContainerBoxRefes,
    ContainerTitles,
    TextContainer,
    SegmentsText,
    Referidos
} from "./styled";
import Text from "@/components/Atoms/Typography/Text"
import Titles from "@/components/Atoms/Typography/Titles";
import { Order } from "@/components/Organisms/Referidos/types"
import { format } from "date-fns"
import Bar from "@/components/Atoms/Bar/Bar"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

interface IProps {
  data: Order[]
}

export const ReferidosTable = ({data}: IProps) => {
    return (
        <ContainerTabla>
            <ContainerTitles>
                <Text
                font="bold"
                fontSize="1.1rem"
                color="white"
                align="center"
                >
                    Referido
                </Text>
                <Text
                font="bold"
                fontSize="1.1rem"
                color="white"
                align="center"
                >
                    Estado
                </Text>
            </ContainerTitles>

            {
            data.map((order, index) => {
              let orderStatus = 0
              let textStatus = ""
              if (order.order_status === "failed") {
                textStatus = "El pedido falló"
              } else if (order.order_status === "refunded") {
                textStatus = "Tu amigx cancelo la compra"
              } else if (order.order_status === "cancelled") {
                textStatus = "La orden esta cancelada"
              } else if (order.order_status === "processing") {
                textStatus = "En proceso"
                orderStatus = 2
              } else if (order.order_status === "pending") {
                textStatus = "Tu referido todavia no pagó"
                orderStatus = 1
              } else if (order.order_status === "completed") {
                textStatus = "En camino"
                orderStatus = 2
              } else if (order.order_status === "delivered") {
                const currentDate = new Date();
                const deliveredDate = new Date(order.date_modified.date);
                const differenceDays = (currentDate.getTime() - deliveredDate.getTime()) / (1000 * 60 * 60 * 24);
                const is30Noches = differenceDays > 30
                if (!is30Noches) {
                  textStatus = "En prueba de 30 noches"
                  orderStatus = 3
                } else {
                  textStatus = "Si todavia no te pagamos, tranqui, lo vamos a hacer la tercer semana del mes."
                  orderStatus = 4
                }
              }

              return ( 
              <Referidos key={index}>
                <ContainerBoxRefes>
                  <TextContainer>
                    <Titles
                    titleTag="h3"
                    color="yellowCalm"
                    fontSize="1rem"
                    responsiveMobile={{
                      fontSize:"0.9em"
                    }}
                    >
                      {order.referral_name}
                    </Titles>
                    <Text
                    fontSize="0.9rem"
                    color="millionGray"
                    >
                      #{order.id} {format(new Date(order.date_modified.date), "dd/MM/yyyy")} <br/>
                      {textStatus}
                    </Text>
                  </TextContainer>

                  {
                    orderStatus !== 0 &&
                        <TextContainer>
                          <Bar cantidad={orderStatus} title="" isCircle segments={4}/>
                          
                          <SegmentsText>
                              <Text
                              font="regular"
                              fontSize=".7rem"
                              >
                                Orden <br /> hecha
                              </Text>

                              <Text
                              font="regular"
                              fontSize=".7rem"
                              >
                                Procesando
                              </Text>

                              <Text
                              font="regular"
                              fontSize=".7rem"
                              >
                                30 noches <br /> de prueba
                              </Text>

                              <Text
                              font="regular"
                              fontSize=".7rem"
                              >
                                Platita
                              </Text>
                          </SegmentsText>
                        </TextContainer>
                  }
                </ContainerBoxRefes>
                {
                  order.refund_amount && orderStatus !== 0 &&
                  <Margin margin="0 0 20px 10px">
                    <Text
                      font="bold"
                      fontSize="1.3rem"
                      color="auberginePerl"
                      >
                      ${order.refund_amount}
                    </Text>
                  </Margin>
                }
              </Referidos>
            )})}
        </ContainerTabla>
    )
}