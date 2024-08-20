import React, { useEffect, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import { IProps, IPropsChildrens } from "./types"
import {
  Gallery,
  DivImgRender3D,
  ButtonWrapper,
  PillWrapper,
  IndicatorWrapper,
  DivImgRender3DUp,
  DivImgRender3DDown,
  ContainerImagesCarrousel,
  CucardaContainer,
  GaliciaPill
} from "./styled"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Images from "@/components/Atoms/Images/Images"
import Modal from "@/components/Organisms/Modals/Modal"
import ModalCarousel from "@/components/Organisms/Modals/ModalCarousel/ModalCarousel"
import {
  CarouselArrow,
  CarouselImgOpt,
  CarouselRenderOpt
} from "@/utils/Icons"
import CouponPill from "../CouponPill/CouponPill"
import Pills from "@/components/Atoms/Pills/Pills"
import { BannerAndCucarda } from "@/components/Molecules/BannerAndCucarda/BannerAndCucarda"
import Icons from "@/components/Atoms/Icons/Icons"
import { CouponMessi } from "@/utils/Icons"
import { isThursday } from "@/utils/GaliciaPromo"
import Text from "@/components/Atoms/Typography/Text"
import { preloadImages } from "@/utils/preloadImage"
import { onRedirectLoadingFinished, } from "@/state/loading/loadingActions"
import { useDispatch, useSelector } from "react-redux"
import SkeletonLoader from "@/components/Atoms/SkeletonLoader/SkeletonLoader"
import { getLoadingRedirect } from "@/state/loading/loadingSelector"
import { IStore } from "@/state/types"

const Carrousel = ({ 
  children, 
  carrouselProps, 
  galleryCarrousel, 
  isRenderSelected, 
  isSizechange,
  color,
  isColorchange,
  hasRenders,
  setIsSizeChange,
  renders,
  selectedChild,
  fatherLoader
  }: IProps) => {
    
  const dispatch = useDispatch()
  const [ isManuallyChange, setIsManuallyChange] = useState<boolean>(false)
  const [gallery, setGallery] = useState(galleryCarrousel?.images ?? undefined)
  const [galleryLoaded, setGalleryLoaded] = useState(true)
  const [preloadedImages, setPreloadedImages] = useState<{ [key: string]: string }>({});
  const [isRenderAdded, setIsRenderAdded] = useState<boolean>(false);
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))
  const [carouselKey, setCarouselKey] = useState(0);
  
  //precarga imagenes
/*   useEffect(() => {
    if (galleryCarrousel?.images) {
      preloadImages(galleryCarrousel?.images).then(() => {
        setGalleryLoaded(true)
      });

      galleryCarrousel?.images.forEach(image => {
          PreloadResources(image)
      });
    } else {
      setGalleryLoaded(true)
    }
  }, [galleryCarrousel?.images, galleryLoaded]) */

  useEffect(() => {
    if (galleryLoaded) {
      fatherLoader && fatherLoader(true)
      dispatch(onRedirectLoadingFinished())
    }
  }, [galleryLoaded])

  //precarga de renders
/*   useEffect(() => {
    if (renders) {
      const imageKeys = Object.keys(renders);

      imageKeys.forEach(key =>
        preloadImages(renders[key as keyof typeof renders]).then(() => {
          setPreloadedImages(prevState => ({ ...prevState, [key]: renders[key as keyof typeof renders] }));
        })
      )
    }
  }, [renders]); */

  //Agregarlos a la galeria
  useEffect(() => {
    if (
      renders && 
      gallery &&
      selectedChild &&
      galleryLoaded && 
      !isRenderAdded  
    ) {
      const newGallery = [...gallery, renders[selectedChild.id]];
      setGallery(newGallery); 
      setIsRenderAdded(true);
    }
}, [galleryLoaded, selectedChild, isRenderAdded]);

  //cambiarlos segun seleccion
  useEffect(() => {
    if (
      gallery &&
      renders && 
      isRenderAdded &&
      galleryLoaded && 
      selectedChild /*&& 
       preloadedImages[selectedChild.id] */
    ) {
      const lastItemIndex = gallery.length - 1;
      setCarouselKey(carouselKey + 1)
     /*  gallery[lastItemIndex] = preloadedImages[selectedChild.id as keyof typeof renders] */
      gallery[lastItemIndex] = renders[selectedChild.id as keyof typeof renders]
    }
  }, [selectedChild])

  const sliderArrow = (
    clickHandler: () => void,
    isNext?: boolean
  ) => {
    const changeHandle = () => {
      clickHandler(),
      setIsManuallyChange(true)
      setIsSizeChange && setIsSizeChange(false)
    }

    return (
      <ButtonWrapper $isNext={isNext} onClick={changeHandle}>
        <CarouselArrow />
      </ButtonWrapper>
    )
  }

  const renderIndicator = (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
  ) => {
    const changeHandle = (e: React.MouseEvent | React.KeyboardEvent) => {
      clickHandler(e);
      setIsManuallyChange(true);
      setIsSizeChange && setIsSizeChange(false)
    };
    
    return <IndicatorWrapper $isSelected={isSelected} onClick={changeHandle} />
  }

  const [imgUrl, setImgUrl] = useState("")

  return (
    <>
    {
      (!loadingRedirect) ?
      <>
      {galleryCarrousel && gallery && (
        <Modal>
          <Gallerys
            galleryImages={gallery}
            gelleryCategory={galleryCarrousel.category}
            sliderArrow={sliderArrow}
            isSizechange={isSizechange}
            renderThumbs={false} 
            setImgUrl={setImgUrl}
            renderIndicator={renderIndicator}
            isRenderSelected= {isRenderSelected}
            color={color}
            carouselKey={carouselKey}
            isColorchange={isColorchange}
            hasRenders={hasRenders}
            isManuallyChange={isManuallyChange}
          />
          <ModalCarousel imgUrl={imgUrl} />
        </Modal>
      )}
      {carrouselProps && (
        <Carousel
          showArrows={carrouselProps.showArrows || false}
          showStatus={carrouselProps.showStatus || false}
          showThumbs={carrouselProps.showThumbs || false}
          showIndicators= {false}
          infiniteLoop={carrouselProps.infiniteLoop || false}
          autoPlay={carrouselProps.autoPlay || false}
          stopOnHover={carrouselProps.stopOnHover || false}
        >
          {children}
        </Carousel>
      )}
      </>
      : <SkeletonLoader  
          width="750px" 
          height="550px" 
          borderRadius="10px" 
          responsiveMobile={{
            height:"200px"
          }}
          />
    }
    </>
  )
}

export default Carrousel

const Gallerys = (props: IPropsChildrens) => {
  const openModal = (image: any) => {
    {
      props.galleryImages &&
        props.setImgUrl &&
        props.setImgUrl(props.galleryImages[image])
      props.setModal && props.setModal(true)
    }
  }

  const [isImgOption, setIsImgOption] = useState(true)

  return (
    <Gallery ref={props.modalRef} $isRenderSelected={props.isRenderSelected}>
      <Carousel
        key={props.carouselKey}
        autoPlay={!((props.isSizechange && props.hasRenders) || props.isColorchange || props.isManuallyChange)}
        infiniteLoop
        preventMovementUntilSwipeScrollTolerance
        showThumbs={props.renderThumbs}
        swipeScrollTolerance={40}
        showStatus={false}
        showIndicators={true}
        renderIndicator={(
          clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
          isSelected: boolean,
          index: number,
          label: string
        ) => props.renderIndicator(clickHandler, isSelected, index, label)}
        onClickItem={(image) => {
          openModal(image)
        }}
        renderArrowPrev={(
          clickHandler: () => void,
          hasPrev: boolean,
          label: string
        ) => props.sliderArrow(clickHandler)}
        renderArrowNext={(
          clickHandler: () => void,
          hasPrev: boolean,
          label: string
        ) => props.sliderArrow(clickHandler, true)}
        selectedItem={props.isSizechange && props.hasRenders
          ? props.galleryImages.length - 1
          : (props.color !== "" && props.isColorchange)
          ?  props.galleryImages.findIndex(url => props.color && url.includes(props.color))
          : undefined}
        >
        {props.galleryImages.map((image: string, index) => (
          <ContainerImagesCarrousel key={index}>
           <div
              onClick={() => {
                props.setImgUrl(image)
                props.imgUrl && openModal(image)
              }}
            >
              {
                index === 0 ?
                <Images
                src={image}
                alt="images carrousel" 
                widthLCP={854}
                heightLCP={569}
                aspectRatio={1.5}
                priority
                sizes="(max-width: 768px) 400px, 854px"
              />
              : <Images 
              src={image} 
              alt="images carrousel" 
            />
              }
            </div>
          </ContainerImagesCarrousel>
        ))}
      </Carousel>

        {
          process.env.NEXT_PUBLIC_RENDERS === "true" && 
            <DivImgRender3D>
              <DivImgRender3DUp
                onClick={() => setIsImgOption(true)}
                $isSelected={isImgOption}
              >
                <CarouselImgOpt />
              </DivImgRender3DUp>
              <DivImgRender3DDown
                onClick={() => setIsImgOption(false)}
                $isSelected={!isImgOption}
              >
                <CarouselRenderOpt />
              </DivImgRender3DDown>
            </DivImgRender3D>
        }

        {
          (props.gelleryCategory === "nuevos-lanzamientos" ||
          props.gelleryCategory === "muebles") && 
            <PillWrapper>
              <CouponPill />
            </PillWrapper>
        }

        {/*
         ( props.gelleryCategory ===  "ropa de cama" ||
           props.gelleryCategory ===  "bases" ||
           props.gelleryCategory ===  "colchones") && 
            <PillWrapper>
              <Icons
              width="60%"
              height="100%"
              responsiveMobile={{
                width:"45%"
              }}
              >{CouponMessi()}</Icons>
            </PillWrapper>
        */}

        {
          isThursday() && 
          !(props.gelleryCategory == "feria") &&
          !(props.gelleryCategory == "muebles") &&
          <GaliciaPill>
            <Text
            font="bold"
            color="white"
            fontSize="1.2rem"
            responsiveMobile={{
              fontSize:".7rem"
            }}
            >15% EXTRA CON GALICIA</Text>
          </GaliciaPill>
        }

        {
          !isThursday() &&
          <CucardaContainer>
            <BannerAndCucarda isCucarda category={props.gelleryCategory}/>
          </CucardaContainer>
        }
    </Gallery>
  )
}
