import { ChangeEvent, useEffect, useState } from "react"
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Button from "@/components/Atoms/Buttons/Button";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { ContainerRequest, InputContainer } from "./styled"
import { validator } from "@/utils/validator"
import { InputMovingPH } from "@/components/Molecules/InputMovingPH/InputMovingPH"
import { onGetSeguimientoAction, onGetForgottenEmail } from "@/state/order/orderActions"
import {  getForgottenEmail } from "@/state/order/orderSelector"
import { useDispatch, useSelector } from "react-redux"
import { IStore } from '@/state/types';

const SeguimientoRequest = () => {
    const dispatch = useDispatch()
    const orderDataError = useSelector((state: IStore) => state.order.error)
    const forgottenEmail = useSelector(getForgottenEmail)
    const [forggotenMessage, setForggotenMessage] = useState(false)
    
    const [userData, setUserData] = useState({
        email: "",
        emailError: "",
        order: "",
        orderError: ""
      });
    const [forgotterEmail, setForgotterEmail] = useState({
        email: "",
        emailError: "",
    });
    const [isForgotten, setIsForgotten] = useState(false)
      
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {    
        setUserData(validator(e.target.name, e.target.value, userData))
    }

    const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData(validator(e.target.name, e.target.value, userData, true))
    }

    const handleSearchClick = () => {
        dispatch(onGetSeguimientoAction(userData.email, userData.order))
    }

    const handleForgottenOnChange = (e: ChangeEvent<HTMLInputElement>) => {    
        setForgotterEmail(validator(e.target.name, e.target.value, forgotterEmail))
    }
    
    const handleForgottenOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setForgotterEmail(validator(e.target.name, e.target.value, forgotterEmail, true))
    }

    const handleForgotteSearchClick = () => {
        dispatch(onGetForgottenEmail(forgotterEmail.email))
    }

    const handleForgottenClick = () => {
        setIsForgotten(prevState => !prevState)
    }

    let isSubmited = 
    userData.emailError ||
    userData.orderError ||
    !userData.email ||
    !userData.order
    
        
    let isForgottenSubmited = 
    forgotterEmail.emailError ||
    !forgotterEmail.email

    useEffect(() => {
      if(forgottenEmail) {
        setForggotenMessage(true)
        setTimeout(() => {
          setForggotenMessage(false)
        }, 4000)
      }
    }, [forgottenEmail])

    return (
        <ContainerRequest>
            <Titles
            font="regular"
            fontSize="1em"
            color="offBlack"
            align="center"
            responsiveMobile={{
                width:"90%"
            }}
            >
            Ingresá tu mail y tu numero de orden para ver el estado de tu pedido
            </Titles>
          
            <InputContainer>
              <InputMovingPH
                  error={userData.emailError ? true : false}
                  input={{
                  label: "email",
                  name: "email",
                  value: userData.email,
                  error: userData.emailError,
                  onChange: handleOnChange,
                  onBlur: handleOnBlur
                  }}
              />
            </InputContainer>
  
            <InputContainer>
              <InputMovingPH
                    error={userData.orderError ? true : false}
                    input={{
                    label: "#order",
                    name: "order",
                    value: userData.order,
                    error: userData.orderError,
                    onChange: handleOnChange,
                    onBlur: handleOnBlur
                    }}
                />
            </InputContainer>
    
            {
                orderDataError && 
                <Text
                color="rareRed"
                >
                    El mail y la orden no coinciden
                </Text>
            }
                
    
            <Margin margin="1rem auto">
                <Button
                backgroundColor="yellowCalm"
                textColor="white"
                borderRadius="10px"
                borderColor="yellowCalm"
                backgroundColorHover="white"
                textColorHover="yellowCalm"
                size="small"
                font="bold"
                disabled={!!isSubmited}
                disableStyles
                onClick={handleSearchClick}
                >
                    Ver
                </Button>
            </Margin>
    
            <Margin margin="2rem auto">
              <Button
                  backgroundColor="yellowCalm"
                  textColor="white"
                  borderRadius="10px"
                  borderColor="yellowCalm"
                  backgroundColorHover="white"
                  textColorHover="yellowCalm"
                  size="small"
                  font="bold"
                  onClick={handleForgottenClick}
                  >
                    No recuerdo mi numero de orden
              </Button>
            </Margin> 

             {
              isForgotten &&
              <>
                <Margin margin="2rem">
                  <Text
                    font="regular"
                    fontSize="1rem"
                    color="offBlack"
                  >
                    Escribi tu mail y te mandamos el link para que puedas hacer el seguimiento.
                  </Text>    
                </Margin>

                <InputContainer>
                  <InputMovingPH
                    error={forgotterEmail.emailError ? true : false}
                    input={{
                    label: "#email",
                    name: "email",
                    value: forgotterEmail.email,
                    error: forgotterEmail.emailError,
                    onChange: handleForgottenOnChange,
                    onBlur: handleForgottenOnBlur
                    }}
                  />
                </InputContainer>

                         
                {
                  forgottenEmail && forggotenMessage &&
                    <Text
                    font="regular"
                    >
                      {forgottenEmail.response}
                    </Text>
                }
      
                <Margin margin="1rem auto">
                  <Button
                  backgroundColor="yellowCalm"
                  textColor="white"
                  borderRadius="10px"
                  borderColor="yellowCalm"
                  backgroundColorHover="white"
                  textColorHover="yellowCalm"
                  size="small"
                  font="bold"
                  disabled={!!isForgottenSubmited}
                  disableStyles
                  onClick={handleForgotteSearchClick}
                  >
                    Enviar
                  </Button>
                </Margin>

             
              </>
            }
            <Margin margin="3rem"></Margin>
        </ContainerRequest>
    )
}

export default SeguimientoRequest