import { useEffect, useState } from "react"
import { getSeguimiento } from "@/state/order/orderSelector"
import { useSelector, useDispatch } from "react-redux"
import { IStore } from '@/state/types';
import { topPage } from '@/utils/topPage';
import OrderInfoSeguimiento from "@/components/Organisms/OrderInfoSeguimiento/OrderInfoSeguimiento"
import SeguimientoRequest from "@/components/Organisms/SeguimientoRequest/SeguimientoRequest";
import { useRouter } from "next/router";
import { onGetSeguimientoAction } from "@/state/order/orderActions"

export const SeguimientoLanding = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { mail, order } = router.query;
  const orderData = useSelector(getSeguimiento)
  const orderDataError = useSelector((state: IStore) => state.order.error)
  
  const [view, setView] = useState(false)

  const handleReturnClick = () => {
    setView(prevState => !prevState)
    topPage()
  }

  useEffect(() => {
    if (mail && order) {
      setView(true)
      dispatch(onGetSeguimientoAction(mail as string, order as string))
    }
  }, [mail, order])

  useEffect(() => {
    if (orderData && !orderDataError) {
      setView(true)
    } else {
      setView(false)
    }
    topPage()
  }, [orderData, orderDataError])
  
  return (
    <>
    {
      view ? (
      <OrderInfoSeguimiento 
        handleReturnClick={handleReturnClick}
      />
      ) : (
        <SeguimientoRequest/>
      )
    }
    </>
  );
};

export default SeguimientoLanding;
