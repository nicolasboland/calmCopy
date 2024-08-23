import { useState, useEffect } from "react"
import { DivInformationShipping, DivText, DivInputs } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import {
  onGetShippingTime,
  onGetHolidays
} from "@/state/products/productsActions"
import { getShippintTime } from "@/state/products/productsSelector"
import { IStore } from "@/state/types"
import { IProps } from "./types"
import { useRouter } from "next/router"
import SameDayCountDown from "./SameDayCountDown/SameDayCountDown"
import useCalculateShipping from "@/utils/calculateShipping"
import { getCartPostCode } from "@/state/cart/cartSelector"
import { onUpdateShippingFromCart } from "@/state/cart/cartActions"
import Text from "@/components/Atoms/Typography/Text"
import Input from "@/components/Atoms/Input/Input"
import Button from "@/components/Atoms/Buttons/Button"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { CamionSvg} from "@/utils/Icons"
import { getUserCP } from "@/state/user/userSelector"
import { onEnterCP } from "@/state/user/userActions"

const InformationShipping = ({
  product,
  clearInput,
  setClearInput
}: IProps) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [showInput, setShowInput] = useState(false)
  const [allowCountDown, setAllowCountDown] = useState<boolean>()
  const [showComponent, setShowComponent] = useState(false)
  const [dateToCorte, setDateToCorte] = useState<Date>()
  const shippingTime = useSelector((state: IStore) => getShippintTime(state))
  const cp = useSelector(getUserCP)
  /* const postcode = useSelector(getCartPostCode) */

  const [message, setMessage] = useCalculateShipping()

/*   useEffect(() => {
    dispatch(onGetHolidays())
  }, []) */

/*   useEffect(() => {
    if (postcode && postcode != "") {
      setCp(postcode)
      calcularTiempo(postcode)
    }
  }, [postcode]) */

  useEffect(() => {
    if(
      router &&
      product &&
      (
        router.asPath.includes("A-FBIG-BOFU-CNV-RTG-Colchones-EntregaEnElDíaCABA") ||
        router.asPath.includes("A-FBIG-BOFU-CNV-RTG-Colchones-EntregaEnElD%C3%ADaCABA") ||
        router.asPath.includes("V-FBIG-BOFU-CNV-RTG-Colchones-Entrega24hsCABA")
      )
    ) {
      //DESCOMENTAR PARA PRENDER FEATURE DE SAME DAY COUNTDOWN
      //setAllowCountDown(true)
      //dispatch(onGetShippingTime("1414", product.sku));
    } else if(product) {
      setShowComponent(true)
    }

   /*  if (router.asPath) {
      setShowInput(false)
      setCp("")
      setMessage({
        flag: false,
        response: ""
      })
    }
 */
    if (product && cp) {
      calcularTiempo()
    }
  }, [router.asPath, product])

  useEffect(() => {
    if(allowCountDown) {
      if(shippingTime) {
        let corte = new Date(shippingTime.data.real_date)
        corte.setHours(corte.getDay() == 6 ? 8 : 15, 0, 0, 0);
        const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/Argentina/Buenos_Aires'}));
        if((now.getDate() == corte.getDate() || (now.getDate() + 1) == corte.getDate() ) && now.getMonth() == corte.getMonth() && now.getTime() < corte.getTime()) {
          setDateToCorte(corte)
        }
        setShowComponent(true)
      }
    }
  }, [allowCountDown, shippingTime])

  useEffect(() => {
    if(cp) {
      setShowInput(true)
    }
  }, [cp])

  const calcularTiempo = (postcode?: string) => {
    setMessage({
      flag: true,
      response: "Calculando tiempo estimado..."
    })

    if (product && cp/* (postcode ?? cp) */) {
      dispatch(onGetShippingTime(/* postcode ??  */cp, product.sku))
    }
  }

  const handleChangeCp = (e: React.ChangeEvent<HTMLInputElement>) => {
    var numberValidate = /^\d*$/.test(e.target.value)

    if (!numberValidate) {
      setMessage({
        flag: true,
        response: "Ingrese solo numeros"
      })
    } else {
      dispatch(onEnterCP(e.target.value))
      setMessage({
        flag: false,
        response: ""
      })
    }
  }

  return (
    <DivInformationShipping>
      {showComponent && (
        <>
          {dateToCorte ? (
            <SameDayCountDown dateToCorte={dateToCorte} />
          ) : (
            <>
              <DivText onClick={() => setShowInput((prevState) => !prevState)}>
                <CamionSvg />
                <Margin margin="0 10px"/>
                <Text
                  fontSize="0.7rem"
                  color="parkPicnic"
                  font="bold"
                  textDecoration="underline"
                >
                  {" "}
                  CALCULÁ ACÁ EL TIEMPO DE ENVÍO
                </Text>
              </DivText>
              {
                showInput &&
                  <DivInputs>
                    <Input
                      type="text"
                      onChange={handleChangeCp}
                      value={cp}
                      name="cp"
                      placeholder="Ingresá tu codigo postal"
                      color="argent"
                      backgroundColor="beluga"
                      borderColor="beluga"
                    />

                  <Margin margin="10px" />

                    <Button
                      onClick={() => calcularTiempo()}
                      size="xsmall"
                      backgroundColor="yellowCalm"
                      textColor="white"
                      borderRadius="8px"
                    >
                      Calcular
                    </Button>
                  </DivInputs>
              }
                {message.flag && (
                  <Margin margin="20px 0 5px 0">
                    <Text fontSize="0.8rem" color="parkPicnic" font="regular">
                      {message.response}
                    </Text>
                  </Margin>
                )}
            </>
          )}
        </>
      )}
    </DivInformationShipping>
  )
}

export default InformationShipping
