import React from "react"
import { useState } from "react"
import {
  ContainerGuiaVehiculo,
  ContainerImgs,
  ImageDiv,
  FullscreenImage,
  ContainerTitle
} from "./styled"
import { useWidth } from "@/hooks/useWidth"
import Titles from "@/components/Atoms/Typography/Titles"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Images from "@/components/Atoms/Images/Images"
import { deviceSizes } from "@/utils/Theme"

export default function DescriptionVehicles() {
  const [fullscreenImage, setFullscreenImage] = useState(null)

  const handleImageClick = (imageUrl: any) => {
    setFullscreenImage(imageUrl)
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
  }
  const width = useWidth()
  return (
    <ContainerGuiaVehiculo>
      <Margin margin="15px 0">
      <ContainerTitle>
        <Titles
        titleTag="h3"
          font="light"
          fontSize="2em"
          responsiveMobile={{
            fontSize: "21px"
          }}
        >
          Guía de vehículos
        </Titles>
      </ContainerTitle>
      </Margin>
      <ContainerImgs>
        <ImageDiv
          onClick={() =>
            handleImageClick(
              "https://calmessimple.com.ar/wp-content/uploads/2021/09/800x1000_ReferenciasVehiculos.jpg"
            )
          }
        >
          <Images
            src="https://calmessimple.com.ar/wp-content/uploads/2021/09/800x1000_ReferenciasVehiculos.jpg"
            alt="Imagen 1"
            width="100%"
            height="80vh"
            responsiveMobile={{
              height: "auto"
            }}
          />
        </ImageDiv>
        <Margin margin="1rem" marginMobile="0.5rem" />
        <ImageDiv
          onClick={() =>
            handleImageClick(
              "https://calmessimple.com.ar/wp-content/uploads/2023/06/Tamaños_Tabla.png"
            )
          }
        >
          <Images
            src="https://calmessimple.com.ar/wp-content/uploads/2023/06/Tamaños_Tabla.png"
            alt="Imagen 2"
            width="100%"
            height="80vh"
            responsiveMobile={{
              height: "auto"
            }}
          />
        </ImageDiv>
      </ContainerImgs>
      {width > deviceSizes.mobile && fullscreenImage && (
        <FullscreenImage onClick={closeFullscreen}>
          <Images
            src={fullscreenImage}
            alt="Imagen en pantalla completa"
            width="auto"
            height="85%"
          />
        </FullscreenImage>
      )}
    </ContainerGuiaVehiculo>
  )
}
