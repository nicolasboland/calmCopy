import { useState } from "react"
import { Content, IFrame, Window, Wrapper, TitleContainer } from "./styled"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Images from "@/components/Atoms/Images/Images"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"

const VirtualTour = () => {
    const [showVirtualTour, setShowVirtualTour] = useState(false)
  return (
    <Wrapper>
      <Content>
        <IFrame
          src="https://app.lapentor.com/sphere/siestario-1698267320"
          allow="vr,gyroscope,accelerometer"
          $visible={showVirtualTour}
        />
        <Window onClick={() => setShowVirtualTour(true)} $visible={!showVirtualTour}>
          <TitleContainer>
            <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/6511a19b-1fe1-4104-43b4-6bc733f14300/fit=cover" alt="Eye" width="30px"/>

            <Margin margin="0 5px"/>

            <Titles
            titleTag="h5"
            font="light"
            color="white"
            fontSize="1.3rem"
            lineHeight="1.5em"
            align="center"
            >
              Conocé el siestario
            </Titles>
          </TitleContainer>

          <Text
          font="light"
          align="center"
          fontSize="1.1em"
          color="white"
          lineHeight="1.5em"
          >
            Tocá la habitación para comenzar el recorrido virtual
          </Text>
        </Window>
      </Content>
    </Wrapper>
  )
}

export default VirtualTour
