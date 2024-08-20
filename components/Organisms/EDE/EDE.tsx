import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  ProductInfoContainer,
  LandingContainer,
  InfoContainer,
  MediaContainer,
  ProductDetail,
} from './styled'
import PostalInput from '@/components/Molecules/PostalInput/PostalInput'
import { onGetProduct } from "@/state/products/productsActions";
import { IStore } from "@/state/types";
import { getProductsData } from "@/state/products/productsSelector";
import Spinner from '@/components/Atoms/Spinner/Spinner';
import Images from '@/components/Atoms/Images/Images';
import Titles from '@/components/Atoms/Typography/Titles';
import Text from '@/components/Atoms/Typography/Text';
import NuggetReview from '@/components/Molecules/Reviews/NuggetReviews/NuggetReview';
import Margin from '@/components/Atoms/Spacing/Margin/Margin';
import { formatNumber } from '@/utils/formatPrices'

function EDE() {
  const dispatch = useDispatch();
  const productsData = useSelector((state: IStore) => getProductsData(state));
  const [EDEPrice, setEDEPrice] = useState<number | undefined>()

  useEffect(() => {
    dispatch(onGetProduct("2024353"))
  }, [])

  useEffect(() => {
    setEDEPrice(productsData?.find(element => element.id === "2024353")?.price)
    
  }, [productsData])
  return (
    <LandingContainer>
      <InfoContainer>
        <MediaContainer>
          <Images 
            src="https://calmessimple.com.ar/wp-content/uploads/2023/03/IMG_PRODU_ENTREGA.webp"
            alt="Entrega de Ensueño"
          />
        </MediaContainer>
        <ProductInfoContainer>
            <Titles
                titleTag='h3'
                fontSize='2.6em'
                color='offBlack'
                font='light'
                responsiveMobile={{
                    fontSize: "2.6rem"
                }}
                boldTitle="de ensueño"
                >
                entrega
                <br/>
            </Titles>
            <NuggetReview skus="EXPENTENS000000" />
          <Text
            color='offBlack'
            fontSize='1.1em'>
                dejamos tu habitación pipí cucú</Text>
            <Margin margin='1rem'/>
          <ProductDetail>
            <Text
                fontSize='1rem'
                font="extraBold"
                >Sobre el servicio</Text>
            
            <Text
                fontSize='1rem'
                font="light"
                lineHeight='16px'
                letterSpacing='-0.2px'
                >
              Nuestros productos son super fáciles de armar pero si necesitas
              que lo hagamos por vos, entrega de ensueño es el servicio ideal
              para que no tengas que preocuparte por nada.
            </Text>
            <Text
                fontSize='1rem'
                font="light"
                lineHeight='16px'
                letterSpacing='-0.2px'
                >
              Nuestros expertos van a abrir los productos, instalarlos y reciclar los envoltorios. 
              Siempre que vos quieras y entre en el ascensor, también se pueden llevar tu ex-colchón.
            </Text>
          </ProductDetail>
          <Margin margin='1rem'/>
           {EDEPrice ? 
           <Text
                fontSize='2.2rem'
                font="light">$ {formatNumber(EDEPrice)}</Text>
                : 
                <Spinner isBlack/>
            }
            <Margin margin='1rem'/>

          <PostalInput
            alertMessage="Para solicitar este servicio, tildá la opción de entrega de ensueño en los productos habilitados. Podés chequear si entrega de ensueño llega a tu domicilio introduciendo tu CP acá abajo"
            showTitle={false}
            edeLanding
          />
        </ProductInfoContainer>
      </InfoContainer>
    </LandingContainer>
  )
}

export default EDE
