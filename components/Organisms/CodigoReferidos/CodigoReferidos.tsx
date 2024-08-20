import {
    Container,
    InputContainer
} from "./styled";
import { ChangeEvent, useEffect, useState } from "react";
import Titles from "@/components/Atoms/Typography/Titles";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Button from "@/components/Atoms/Buttons/Button";
import { onGetRDC } from "@/state/order/orderActions"
import { useDispatch, useSelector } from "react-redux"
import { InputMovingPH } from "@/components/Molecules/InputMovingPH/InputMovingPH"
import { validator } from "@/utils/validator"
import Spinner from "@/components/Atoms/Spinner/Spinner";
import { getLoadingRDC } from "@/state/loading/loadingSelector"
import Text from "@/components/Atoms/Typography/Text";
import { IStore } from "@/state/types";
import { onRDCLoadingStart } from "@/state/loading/loadingActions";

interface IProps {
    errorText?: string
}

export const CodigoReferidos = ({errorText}: IProps) => {
    const dispatch = useDispatch()
    const orderDataError = useSelector((state: IStore) => state.order.error)
    const loadingRDC = useSelector(getLoadingRDC)
    const [email, setEmail] = useState({
        email: "",
        emailError: "",
      });
  
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {    
        setEmail(validator(e.target.name, e.target.value, email))
      }
    
      const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(validator(e.target.name, e.target.value, email, true))
      }
    
      const handleSearchClick = () => {
        dispatch(onRDCLoadingStart())
        dispatch(onGetRDC(email.email))
      }

      let isSubmited = 
      email.emailError ||
        !email.email 

    return (
        <Container>
            <Titles
            titleTag="h4"
            color="millionGray"
            font="light"
            fontSize="1.7rem"
            boldTitle="código de referidxs"
            responsiveMobile={{
                fontSize:"1.2rem",
                align:"center"
            }}
            >
                obtené tu
            </Titles>

            <Margin margin="20px 0 20px 0">
                <InputContainer>
                    <InputMovingPH
                        error={email.emailError ? true : false}
                        input={{
                        label: "email",
                        name: "email",
                        value: email.email,
                        error: email.emailError,
                        onChange: handleOnChange,
                        onBlur: handleOnBlur
                        }}
                    />
                </InputContainer>
            </Margin>

            {
                errorText ?
                <Margin margin="10px 0 20px 0">
                    <Text
                    font="regular"
                    color="rareRed"
                    >
                        {errorText}
                    </Text>
                </Margin>
                : orderDataError &&
                <Margin margin="10px 0 20px 0">
                    <Text
                    font="regular"
                    color="rareRed"
                    >
                        Hubo un error, intentalo de nuevo o escribinos para que te podamos ayudar 💛
                    </Text>
                </Margin>
            }
            
            <Button
            onClick={handleSearchClick}
            size={"medium"}
            backgroundColor="yellowCalm"
            textColor="white"
            borderRadius="10px"
            fontSize="1.1rem"
            font="extraBold"
            disabled={!!isSubmited}
            backgroundColorHover="vividAmber"
            >
                {
                    loadingRDC ?
                    <Spinner/>
                    : "¡reclutá calmantes!"
                }
            </Button>
        </Container>
    )
}