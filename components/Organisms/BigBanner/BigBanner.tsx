import { 
  BackButton,
  ButtonWrapper,
  SliderContainer, 
  SliderWrapper,
 } from './styled'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IPlainImageSlide } from "@/state/hygraph/types";
import SlideContent from './Content';
import { IBigbanner } from "./types"

const BigBanner = ({ 
  bigBanner,
  isDefault,
  isImagesLoaded,
  preloadImageDesktop,
  preloadImageMobile,
  isFirstImageLoaded
  }: IBigbanner) => {
  
  const sliderArrow = (clickHandler: () => void, hasPrev: boolean, label: string, isNext?: boolean) => (
    <ButtonWrapper $isNext={isNext} onClick={clickHandler}>
      <BackButton $isNext={isNext} color="#999"/>
    </ButtonWrapper>
  )
  return (
    <SliderContainer $isFirstImageLoaded={isFirstImageLoaded}>
      {bigBanner ?
        <>
          {
            bigBanner && bigBanner.length > 1 &&
            <Carousel
              autoPlay
              interval={5000}
              showStatus={false}
              infiniteLoop
              showThumbs={false}
              renderArrowPrev={(clickHandler: () => void, hasPrev: boolean, label: string) => sliderArrow(clickHandler, hasPrev, label)}
              renderArrowNext={(clickHandler: () => void, hasPrev: boolean, label: string) => sliderArrow(clickHandler, hasPrev, label, true)}
              preventMovementUntilSwipeScrollTolerance
              swipeScrollTolerance={40}
            >
              {[...bigBanner].map((slider: IPlainImageSlide) => (
                <SlideContent 
                slider={slider} 
                key={slider.titulo} 
                isDefault={isDefault}
                isImagesLoaded={isImagesLoaded}
                preloadImageDesktop={preloadImageDesktop}
                preloadImageMobile={preloadImageMobile}
                />
              ))}
            </Carousel>
          }
          {
            bigBanner && bigBanner.length == 1 &&
            <SliderWrapper $imageSrc='' $mobileImageSrc=''>
              {bigBanner.map((slider: IPlainImageSlide, index) => (
                <SlideContent 
                slider={slider}
                key={index} 
                isDefault={isDefault}
                isImagesLoaded={isImagesLoaded}
                preloadImageDesktop={preloadImageDesktop}
                preloadImageMobile={preloadImageMobile}
                 />
              ))}
            </SliderWrapper>
          }
        </> :
        <SliderWrapper $imageSrc='' $mobileImageSrc=''/>
      }
    </SliderContainer>
  );
};

export default BigBanner;
