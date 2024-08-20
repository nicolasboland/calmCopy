import Modal from "../Modals/Modal";
import Carousel from "../../Molecules/Carousel/Carousel";
import { IProps } from "./types";
import { 
  DivPayment, 
  DivUnits , 
  CarouselContainer,
 } from "./styled";
import PaymentCard from "../../Molecules/PaymentCard/PaymentCard";
import { deviceSizes } from "@/utils/Theme";
import { useWidth } from "@/hooks/useWidth";
import { ModalPayment , ModalPaymentIcons } from "../Modals/ModalPaymentMethods/ModalPaymentMethods";

const PaymentMethods = ({showText} : IProps) => {
  const width = useWidth();
  const methods = [
    {
      link: "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/edea205b-efee-4b07-05e9-c407f358a300/fit=cover",
      method: "Tarjeta de credito",
      description: "Hasta 12 cuotas sin interés",
    },
    {
      link: "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e34b550f-63f6-436b-9353-80e5c5954e00/fit=cover",
      method: "Tarjeta de débito",
      description: "&nbsp;",
    },
    {
      link: "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e34b550f-63f6-436b-9353-80e5c5954e00/fit=cover",
      method: "Cuotas sin tarjeta",
      description: "Pagá con Wibond",
    },
    {
      link: "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/333c8718-3b04-4a34-b83e-91b8afac3300/fit=cover",
      method: "Transferencia",
      description: "Hasta 20% Off en un pago",
    },
  ];

  return (
    <DivPayment>
      {width != 0 &&
        <DivUnits>
          {width > deviceSizes.biggerMobile ? (
            <>
              {methods.map((item) => (
                <PaymentCard
                    key={item.method}
                    linkImg={item.link}
                    method={item.method}
                    description={item.description}
                />
              ))}
              <Modal>
                <ModalPaymentIcons showText={showText}/>
                <ModalPayment />
              </Modal>
            </>
          ) : (
            <CarouselContainer>
              <Carousel carrouselProps={{
                infiniteLoop: true,
                autoPlay: true
              }}
              color=""
              >
                {methods.map((item) => (
                  <PaymentCard
                      key={item.method}
                      linkImg={item.link}
                      method={item.method}
                      description={item.description}
                  />
                ))}
              </Carousel>
            </CarouselContainer>
          )}
        </DivUnits>
      }
    </DivPayment>
  );
};

export default PaymentMethods;
