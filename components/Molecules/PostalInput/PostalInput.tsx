import { useEffect, useState } from 'react'
import {
  DivAlert,
  DivImgAlert,
  InputContainer,
} from './styled'
import Spinner from "@/components/Atoms/Spinner/Spinner";
import {IProps} from "./types"
import Titles from '@/components/Atoms/Typography/Titles';
import Text from '@/components/Atoms/Typography/Text';
import Images from "@/components/Atoms/Images/Images";
import Input from "@/components/Atoms/Input/Input";
import Button from "@/components/Atoms/Buttons/Button";
import Margin from '@/components/Atoms/Spacing/Margin/Margin';
import { onGetCpsCaba } from '@/state/order/orderActions'
import { getCpCaba } from '@/state/order/orderSelector'
import { useDispatch, useSelector } from 'react-redux';

const PostalInput = ({
  alertMessage,
  showButton = true,
  showTitle = true,
  buttonAction,
  stateLoading,
  edeLanding,
  isFeria,
  setFeriaATCEnabled
}: IProps) => {
  const dispatch = useDispatch();
  const [postal, setPostal] = useState<string>('')
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const cpCaba= useSelector(getCpCaba);

  useEffect(() => {
    dispatch(onGetCpsCaba());
  }, []);

  useEffect(() => {
    if (postal.length >= 4) {
      const found = cpCaba?.find((element: string) => element === postal)
      setHasUserInteracted(true)
      setIsButtonDisabled(!found)
      setFeriaATCEnabled && setFeriaATCEnabled(!!found)
    } else {
      setIsButtonDisabled(true)
      setHasUserInteracted(false)
      setFeriaATCEnabled && setFeriaATCEnabled(false)
    }
  }, [postal])

  return (
    <InputContainer>
      {showTitle && !isFeria &&(
        <Titles
        titleTag='h3'
        fontSize="1.5em"
        color='offBlack'
        lineHeight='1'
        align='center'
        font='extraBold'
        >Introduce tu código postal</Titles>
      )}
      {
        !isFeria && (
          <DivAlert>
          <DivImgAlert>
            <Images
              width='60%'
              src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1b0595b8-94ac-4c62-0275-d49fb540c000/thumbnail"
              alt="alert"
            />
          </DivImgAlert>
          <Text
          font='medium'
          fontSize='0.8rem'
          lineHeight='0.8rem'
          color='offBlack'>{alertMessage}</Text>
        </DivAlert>
        )
       }

      <Margin margin='0 0 20px 0'>
        <Input
          type="number"
          placeholder="código postal"
          onChange={(e) => setPostal(e.target.value)}
          backgroundColor='beluga'
          color='argent'
          borderColor='yellowCalm'
        ></Input>
      </Margin>

      <Margin margin='0 0 20px 0'>
      {hasUserInteracted ? (
        isButtonDisabled! ? (
          <Text
          font='medium'
          fontSize='0.8em'
          color='rareRed'
          align='center'>
            {
              isFeria 
              ? "Lamentablemente estas fuera de la zona 🙁" 
              : "Lamentablemente entrega de ensueño todavía no llega a tu domicilio 😔"
            }
           
          </Text>
        ) : (
            <Text
            font='medium'
            fontSize='0.8em'
            color='parkPicnic'
            align='center'>
                😉 Felicitaciones, llegamos a tu domicilio.
            </Text>
        )
      ) : (
        <></>
      )}
      </Margin>

      {!edeLanding && !isFeria &&
      <>
        {
          stateLoading && showButton ? (
            <Button
                backgroundColor='yellowCalm'
                borderColor='yellowCalm'
                borderRadius='6px'
                textColor='white'
                fontSize='13px'>
              <Spinner/>
            </Button>
          ) : (
            <Button 
              backgroundColor={isButtonDisabled ? "millionGray" : "yellowCalm"}
              borderColor={isButtonDisabled ? "millionGray" : "yellowCalm"}
              borderRadius='6px'
              textColor='white'
              fontSize='13px'
              onClick={buttonAction} 
              disabled={isButtonDisabled}
            >
              continuar con la compra
            </Button>
          )
        }
      </>
       
      }
    </InputContainer>
  )
}

export default PostalInput
