import {
  ContainerThankU,
  ContainerText,
  TitleThankU,
  TextThankU,
  ContainerDetailOrder,
  ContainerCart,
  ContainerUserDetail,
  TitleOrderDetail,
  TextOrderDetail,
  ContainerLogoCalm,
  LogoCalm,
  ContainerRuedaCalm,
  FraseRuedaCalm,
  TitleRuedaCalm,
  TextRuedaCalm,
  LinkSoporte,
  ContainerTextRuedaCalm,
  ButtonContainer,
  ButtonCalm,
  logoImg,
  LogoConfirmacionSVG,
  TextInfo,
} from "./thanUcomponentCss";
import { onGetOrder, onVerifyOrderExistReq } from "@/state/order/orderActions";
import { useSelector } from "react-redux";
import { IStore } from "@/state/types";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ThankUloader from "./loaderThankU/thankUloader";
import SummaryCart from "./summaryCart/SummaryCart";
import { useSearchParams } from 'next/navigation';
import { getCheckoutPath, getOrderExist, getThankuContent } from "@/state/order/orderSelector";
import { onGetPayLoadingFinished } from "@/state/loading/loadingActions"
import * as gtag from "@/utils/gtagEvents"
import provincias from "@/utils/provincias.json"
import { dateFormatter } from "@/utils/dateFormatter";
import ModalMaps from "@/components/Organisms/Checkout/Form/EntregaYFacturacion/ModalMaps/ModalMaps";
import { getCartData } from "@/state/cart/cartSelector";
import { onRemoveAllItemsCart, onRemoveItemFromCart } from "@/state/cart/cartActions";
import { BACS, CASH, LOCALM_GODOY, LOCALM_SANTOS, MODO, WIBOND, LOCALM_AUSTRIA } from "@/utils/payment_methods";
import { onGetUserIsLogged } from "@/state/user/userActions";
import { useRouter } from "next/router";
import { getLoadingEmptyCart } from "@/state/loading/loadingSelector";

const locales: any = {
  "Palermo": "Godoy Cruz 1737, CABA",
  "Chacarita": "Santos Dumont 3507, CABA",
  "Austria": "Santa Fe 2999, CABA",
}

export const ThankYoucomponent = () => {
  const orderCreatedInfo = useSelector((state: IStore) =>
  getThankuContent(state)
  );
  const [province , setProvince] = useState<string>()
  const cartData = useSelector((state: IStore) => getCartData(state));
  const infoOrderExist = useSelector((state: IStore) => getOrderExist(state));
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [ textDate, setTextDate] = useState<string>()
  const [canCleanCart, setCanCleanCart] = useState<boolean>(false)
  const router = useRouter();
  const loadingEmptyCart = useSelector(getLoadingEmptyCart)
  const summaryCart = useSelector((state: IStore) =>
    getThankuContent(state)
    );

  useEffect(() => {
    if (searchParams && searchParams.get("id") && searchParams.get("order_key")) {
      const order_id = parseInt(searchParams.get("id")!);
      const order_key = searchParams.get("order_key")!; 

      dispatch(onVerifyOrderExistReq(order_id, order_key));
    }
  }, [searchParams])


  useEffect(() => {
    dispatch(onGetPayLoadingFinished());
    dispatch(onGetUserIsLogged())

    localStorage.removeItem("id_to_pay");
    localStorage.removeItem("key_to_pay");
    localStorage.removeItem("order_id");
    localStorage.removeItem("order_key");
    localStorage.removeItem("first_step_checkout");
    localStorage.removeItem("second_step_checkout");
    localStorage.removeItem("cartData");
    localStorage.removeItem("cartDataDate");

  }, []);

  useEffect(() => {
    if(infoOrderExist) {
      const { order_exist, order_paid } = infoOrderExist;

      if(!order_exist) {
        router.push(`/${process.env.NEXT_PUBLIC_CHECKOUT_PATH_HEADLESS}`);
      }

      if(!order_paid) {
        router.push(`/${process.env.NEXT_PUBLIC_CHECKOUT_PATH_HEADLESS}?order_id=${infoOrderExist?.order_data?.id}&order_key=${infoOrderExist?.order_data?.order_key}`);
      }

      if(order_exist && order_paid) {      
        setCanCleanCart(true)  
        dispatch(onGetOrder(`${searchParams.get("id")}`, `${searchParams.get("order_key")}`));
      }
    }
  }, [infoOrderExist]);

  useEffect(() => {
    const keys: { key: string }[] | undefined = cartData?.items?.map(item => ({ key: item?.key })) || undefined;
    if(keys && canCleanCart) {
      dispatch(onRemoveAllItemsCart(keys))
    }
  }, [cartData, canCleanCart])

  function openChat(bool:any) {
    var eventData = {
          open:bool
    };
    var customEvent = new CustomEvent('toggleIframe', { detail: eventData });
    window.dispatchEvent(customEvent);
  }

 useEffect(() => {
  if(orderCreatedInfo && orderCreatedInfo.id) {
    gtag.event("conversion", {
      'send_to': 'AW-703433440/e2rVCPb4koAYEOCVts8C',
      'value': orderCreatedInfo.total,
      'currency': 'ARS',
      'transaction_id': orderCreatedInfo.id
    })
  } 

  if (orderCreatedInfo && orderCreatedInfo.billing.state) {
    provincias.map((province) =>{
      if (province.value === orderCreatedInfo.billing.state) {
        setProvince(province.name)
      }
    })
  }

  if (orderCreatedInfo && orderCreatedInfo.shipping.shipping_date != "") {
    
    const parts = orderCreatedInfo.shipping.shipping_date.split("/");

    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}T00:00:00-03:00`;

    const deliveryDate = new Date(formattedDate);

    setTextDate(dateFormatter(new Date(deliveryDate)))
  }
}, [orderCreatedInfo])

return (
    <div>
      {
      !orderCreatedInfo && !textDate && !infoOrderExist ? (
        <ThankUloader />
      ) : (
        infoOrderExist?.order_exist && infoOrderExist.order_paid && orderCreatedInfo && <ContainerThankU>
          <ContainerLogoCalm>
            <LogoCalm src={logoImg} />
          </ContainerLogoCalm>
          <LogoConfirmacionSVG />
          <ContainerText>
            
            <TextThankU>
              {
                (orderCreatedInfo.payment_method === BACS || orderCreatedInfo.payment_method === CASH) 
                ? <TitleThankU><b>¡Pedido en marcha!</b> 🚀</TitleThankU>
                : (orderCreatedInfo.payment_method === LOCALM_GODOY || orderCreatedInfo.payment_method === LOCALM_SANTOS || orderCreatedInfo.payment_method === LOCALM_AUSTRIA)
                ? <TitleThankU><b>¡Orden #{orderCreatedInfo.id} creada!</b> 🚀</TitleThankU>
                : <TitleThankU><b>¡Gracias por tu compra!</b></TitleThankU>
              }

              {
                orderCreatedInfo.shipping.is_pickup 
                ? (
                  (orderCreatedInfo.payment_method === LOCALM_GODOY || orderCreatedInfo.payment_method === LOCALM_SANTOS || orderCreatedInfo.payment_method === LOCALM_AUSTRIA)
                  ? <TextInfo>El cliente lleva su pedido en el momento. 💁</TextInfo>
                  : orderCreatedInfo.payment_method === BACS
                  ? <TextInfo>Enviá el <b>comprobante con el CUIT/CUIL del titular</b> de la cuenta a <b>hola@calmessimple.com.ar</b> ✉️ Luego, dentro de las próximas 48hs hábiles, validamos, aprobamos tu pedido y listo, ¡podés pasar a retirarlo en {locales[orderCreatedInfo.shipping.pickup_location]}!</TextInfo>
                  : <TextInfo>Te esperamos en {locales[orderCreatedInfo.shipping.pickup_location]} para retirar tu pedido 💛¡Estamos todos los días de 11 a 20hs!</TextInfo>
                )
                : (
                  (orderCreatedInfo.payment_method === LOCALM_GODOY || orderCreatedInfo.payment_method === LOCALM_SANTOS || orderCreatedInfo.payment_method === LOCALM_AUSTRIA)
                  ? <TextInfo>El cliente recibirá su pedido el <b>{textDate}</b> <b>{orderCreatedInfo.shipping.shipping_time}</b> 🚚</TextInfo>
                  : orderCreatedInfo.payment_method === BACS
                  ? <TextInfo>Enviá el <b>comprobante con el CUIT/CUIL del titular</b> de la cuenta a <b>hola@calmessimple.com.ar</b> ✉️ Luego, dentro de las próximas 48hs hábiles, validamos, aprobamos tu pedido y listo, ¡preparate para recibirlo! 🚚</TextInfo>
                  : <TextInfo>¡Todo listo! Vas a recibir tu pedido el <b>{textDate}</b> 🚚 <b>{orderCreatedInfo.shipping.shipping_time}</b>.</TextInfo>
                )
              }

              {
                (orderCreatedInfo.payment_method === BACS || orderCreatedInfo.payment_method === CASH)
                && <TextInfo>Reserva garantizada por 48hs, no te duermas 😴</TextInfo>
              }

              {
                orderCreatedInfo.payment_method !== BACS 
                ? (orderCreatedInfo.payment_method === LOCALM_GODOY || orderCreatedInfo.payment_method === LOCALM_SANTOS || orderCreatedInfo.payment_method === LOCALM_AUSTRIA)
                  ? <TextInfo>Recibirá todos los detalles de la orden en su mail <b>{orderCreatedInfo.billing.email}</b> ✉️</TextInfo>
                  : (orderCreatedInfo.payment_method === CASH) 
                  ? <TextInfo>Revisá la casilla de <b>{orderCreatedInfo.billing.email}</b> ✉️ para ver todos los detalles de tu pedido.</TextInfo>
                  : <TextInfo>Revisá la casilla de <b>{orderCreatedInfo.billing.email}</b> ✉️ para ver todos los detalles de tu compra.</TextInfo>
                : <TextInfo>Detalles bancarios 👇</TextInfo>
              }
            </TextThankU>

          </ContainerText>
          <ContainerDetailOrder>
            {summaryCart && 
              <ContainerCart>
                <SummaryCart 
                items={summaryCart.items}
                coupons={summaryCart.coupons}
                payment_method={summaryCart.payment_method}
                subtotal={summaryCart.subtotal}
                total={summaryCart.total}
                shipping={summaryCart.shipping}
                />
              </ContainerCart>
            }
            <ContainerUserDetail>
              {
                orderCreatedInfo.payment_method === BACS ? (
                  <TitleOrderDetail>Datos de la transferencia</TitleOrderDetail>
                ) : (
                  <TitleOrderDetail>Pago</TitleOrderDetail>
                )
              }
              <TextOrderDetail>
                  
              {
                orderCreatedInfo.payment_method === WIBOND ? (
                  <div>
                    <p>A través de {orderCreatedInfo.payment_details.method_title}</p>
                    <p>ID de transacción: {orderCreatedInfo.payment_details.id}</p>
                  </div>
                   
                ) : orderCreatedInfo.payment_method === CASH ? (
                  <p>Pagá en efectivo en el local {locales[orderCreatedInfo.shipping.pickup_location]}</p>

                ) : orderCreatedInfo.payment_method === MODO ? (
                  <p>Pago a través de MODO</p>

                ) : orderCreatedInfo.payment_method === BACS ? (
                  <div>
                    <p><b>Titular de la cuenta: </b>Sleep Calm SA</p>
                    <p><b>Banco:</b> Galicia</p>
                    <p><b>Número de cuenta: </b>0018041-8 042-1</p>
                    <p><b>Alias:</b> CALM.TRANSFERENCIAS</p>
                    <p><b>CBU:</b> 0070042920000018041815</p>
                </div>
                ) : (
                  <div>
                  {/* {`Pago con tarjeta ${orderCreatedInfo?.payment_details.info_card}`} */}
                </div>
                )
              }
              </TextOrderDetail>
              {
                orderCreatedInfo.shipping.is_pickup ? (
                  <>
                    <TitleOrderDetail>Información de Retiro</TitleOrderDetail>
                    <TextOrderDetail>
                      <p>Retiro por el local en {locales[orderCreatedInfo.shipping.pickup_location]}</p>
                      <ModalMaps local={orderCreatedInfo.shipping.pickup_location}/>
                    </TextOrderDetail>
                  </>
                ) : (
                  <>
                    <TitleOrderDetail>Información de entrega</TitleOrderDetail>
                    <TextOrderDetail>
                      <div>
                        <p>Envío a domicilio</p>
                        <p>{`Llega el`} {textDate} {orderCreatedInfo.shipping.shipping_time}</p>
                        <p>{orderCreatedInfo.billing.address_1}</p>
                        <p>{orderCreatedInfo.billing.city.toUpperCase()} / {orderCreatedInfo.billing.postcode} / {province}</p>
                      </div>
                    </TextOrderDetail>
                  </>
                )
              }
              <TitleOrderDetail>Tus datos</TitleOrderDetail>
              <TextOrderDetail>
                  <p>{orderCreatedInfo.billing.first_name} {orderCreatedInfo.billing.last_name}</p>
                  <p>{orderCreatedInfo.billing.email}</p>
                  <p>{orderCreatedInfo.billing.phone}</p>
              </TextOrderDetail>

              <LinkSoporte onClick={() => openChat(true)}>
                ¿Quéres corregir algún dato? Chateá con nuestro soporte
              </LinkSoporte>
            </ContainerUserDetail>
          </ContainerDetailOrder>
          <ContainerRuedaCalm>
            <ContainerTextRuedaCalm>
              <FraseRuedaCalm>RUEDA DE LA CALMA</FraseRuedaCalm>
              <TitleRuedaCalm>Te damos la bienvenida</TitleRuedaCalm>
              <TextRuedaCalm>
                {`Ya puedes formar parte de nuestro programa de referidos. `}
                <b>{`¡Ganá platita y regala almohadas!`}</b>
                {` Expandiendo la calma.`}
              </TextRuedaCalm>
              <ButtonContainer>
                <ButtonCalm href="/rueda-de-la-calma">Comenzar a reclutar</ButtonCalm>
              </ButtonContainer>
            </ContainerTextRuedaCalm>
          </ContainerRuedaCalm>
        </ContainerThankU>
      )}
    </div>
  );
};

export default ThankYoucomponent;
