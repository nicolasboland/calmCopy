import {
    PasoAPasoContainer,
    LandingContainer,
    InfoContainer,
    NuggetsContainer,
    MediaContainer,
    PasosContainer,
    ReciclarContainer,
    DivLine,
  } from './styled'
import Video from '@/components/Atoms/Video/Video';
import { SeparatedReview } from '@/components/Molecules/Reviews/SeparatedReview/SeparatedReview';
import Images from '@/components/Atoms/Images/Images';
import Titles from '@/components/Atoms/Typography/Titles';
import Text from '@/components/Atoms/Typography/Text';
import Margin from '@/components/Atoms/Spacing/Margin/Margin';
import { useWidth } from '@/hooks/useWidth';

const PasosEDE = () => {
    const width = useWidth();
    const mobileView = width <= 768;
    return(
        <LandingContainer>
        <InfoContainer>
          {mobileView &&
          <PasoAPasoContainer>
          <NuggetsContainer>
            <SeparatedReview skus="EXPENTENS000000" />
          </NuggetsContainer>
          <PasosContainer>
            <Margin margin="0.6em" />

            <Titles
                titleTag='h2'
                font='extraBold'
                fontSize="1.5rem"
                align="flex-start"
                responsiveMobile={{
                  fontSize: "1.3rem"
                }}
            >paso paso de nuestra <br/>entrega de ensueño
            </Titles>
            
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">1
              </Titles>

              <Text
                fontSize='0.9em'>
                te vamos a llamar media hora antes para confirmar que estés en
                tu domicilio
              </Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">2
              </Titles>

              <Text 
                fontSize='.9rem'>
                llegamos con todo lo necesario y liberamos el espacio donde
                vayas a querer tu nueva cama
              </Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">3
              </Titles>

              <Text 
                fontSize='.9rem'>
                armamos tu nueva cama sobre una alfombra para no dañar tu piso
                <br />
                <Text 
                textTag='span'
                font="extraBold">si querés, también le colocamos las sábanas</Text>
              </Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">4
              </Titles>

              <Text 
                fontSize='.9rem'>
                nos llevamos todo el packaging y, si vos querés, también nos llevamos 
                tu ex-colchón para donar, siempre y cuando entre en el ascensor.
              </Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">5
              </Titles>

              <Text 
                fontSize='.9rem'> limpiamos la zona donde estuvimos trabajando</Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">6
              </Titles>

             <Text 
                fontSize='.9rem'>no nos vamos sin antes darte un regalito 😉</Text>
            </div>
            
            <Text
                fontSize='1rem'
                color="bleuDeFrance"
                font='medium'
                align='center'>
              si tenes alguna otra duda, escribinos al chat
            </Text>
          </PasosContainer>
        </PasoAPasoContainer>}
        <div>
          <DivLine />
          <MediaContainer>
            <Video 
            isMp4
            hasLoop 
            hasMuted 
            videoUrl='https://calmessimple.com.ar/wp-content/uploads/2023/03/video_entregadeensueño.webm'
            hasAutoPlay
            title='ede'
            />
          </MediaContainer>

          <ReciclarContainer>
            <Images
              src="https://calmessimple.com.ar/wp-content/uploads//2023/03/icono_circular.svg"
              width="100px"
              height="100px"
              alt="Imagen representante del reciclaje"
              responsiveMobile={{
                width: "150px",
                height: "150px"
              }}
            />

            <Margin margin="0" marginMobile='0 2em'>

            <Text
                align="left"
                fontSize= "1.1em"
                responsiveMobile={{
                    align:"center",
                    fontSize: "0.9em"
                }}>
              Reciclamos el packaging de todos los productos que abrimos en
              entrega de ensueño y donamos tu ex-colchón para que otra
              familia pueda descansar mejor
            </Text>
            </Margin>
          </ReciclarContainer>
        </div>

        { !mobileView && 
        <PasoAPasoContainer>
          <NuggetsContainer>
            <SeparatedReview skus="EXPENTENS000000" />
          </NuggetsContainer>
          <PasosContainer>
            <Margin margin="0.6em" />

            <Titles
                titleTag='h2'
                font='extraBold'
                fontSize="1.5rem"
                align="flex-start"
                responsiveMobile={{
                  fontSize: "1.3rem"
                }}
            >paso paso de nuestra <br/> entrega de ensueño
          </Titles>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">1
              </Titles>

              <Text
                fontSize='0.9em'>
                te vamos a llamar media hora antes para confirmar que estés en
                tu domicilio
              </Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">2
              </Titles>

              <Text 
                fontSize='.9rem'>
                llegamos con todo lo necesario y liberamos el espacio donde
                vayas a querer tu nueva cama
              </Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">3
              </Titles>

              <Text 
                fontSize='.9rem'>
                armamos tu nueva cama sobre una alfombra para no dañar tu piso
                <br />
                <Text 
                textTag='span'
                font="extraBold">si querés, también le colocamos las sábanas</Text>
              </Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">4
              </Titles>

              <Text 
                fontSize='.9rem'>
                  nos llevamos todo el packaging y, si vos querés, también nos llevamos 
                  tu ex-colchón para donar, siempre y cuando entre en el ascensor.
              </Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">5
              </Titles>

              <Text 
                fontSize='.9rem'> limpiamos la zona donde estuvimos trabajando</Text>
            </div>
            <div>
              <Titles
                titleTag='h3'
                color='yellowCalm'
                font='extraBold'
                fontSize="2rem">6
              </Titles>
             <Text 
                fontSize='.9rem'>no nos vamos sin antes darte un regalito 😉</Text>
            </div>
            <Text
                fontSize='1rem'
                color="bleuDeFrance"
                font='medium'
                align='center'>
              si tenes alguna otra duda, escribinos al chat
            </Text>
          </PasosContainer>
        </PasoAPasoContainer>}
      </InfoContainer>
      </LandingContainer>
    )
}
export default PasosEDE;