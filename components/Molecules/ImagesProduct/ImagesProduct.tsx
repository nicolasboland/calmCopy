import { Wrapper, Row, ImageContainer, TextContainer, ImageDegrade, Degrade } from "./styled";
import { Iprops } from "./types";
import Images from "@/components/Atoms/Images/Images";
import Text from "@/components/Atoms/Typography/Text";
import { useWidth } from "@/hooks/useWidth"
import Video from "@/components/Atoms/Video/Video"

export const ImagesProduct = 
({
  images, 
  layoutImagesHaveVideo,
  layoutImageHaveVideo,
  textImages
  }: 
    Iprops) => {

  const width = useWidth();
  const breakpoint = 768;
  
  return (
    <Wrapper>
      {width >= breakpoint ? (
        <>
          <Row>
            <ImageContainer $ratio={2}>
              {
                (layoutImagesHaveVideo && layoutImageHaveVideo?.image0) ? (
                  <Video isMp4 videoUrl={images[0]} hasAutoPlay hasLoop hasMuted width="100%" height="475px" objectFit="cover" borderRadius="10.931px" title="product"/>
                ) : (
                  <Images src={images[0]} alt="Imagen producto" hasTransition={true} width="100%" height="475px" objectFit="cover" borderRadius="10.931px" isLazy/>
                )
              }
            </ImageContainer>
            <ImageContainer $ratio={4}>
              {
                (layoutImagesHaveVideo && layoutImageHaveVideo?.image1) ? (
                  <Video isMp4 videoUrl={images[1]} hasAutoPlay hasLoop hasMuted width="100%" height="475px" objectFit="cover" borderRadius="10.931px" title="product"/>
                ) : (
                  <ImageDegrade>
                    <Images src={images[1]} alt="Imagen producto"width="100%" height="475px" objectFit="cover" borderRadius="10.931px" isLazy/>
                    <Degrade/>
                  </ImageDegrade>
                )
              }
              <TextContainer>
                <Text
                color="white"
                font="bold"
                fontSize="1.7rem"
                width={60}
                >{textImages?.firstText}</Text>
              </TextContainer>
            </ImageContainer>
          </Row>
          <Row>
            <ImageContainer $ratio={4}>
              {
                (layoutImagesHaveVideo && layoutImageHaveVideo?.image2) ? (
                  <Video isMp4 videoUrl={images[2]} hasAutoPlay hasLoop hasMuted width="100%" height="475px" objectFit="cover" borderRadius="10.931px" title="product"/>
                ) : (
                  <ImageDegrade>
                    <Images src={images[2]} alt="Imagen producto"width="100%" height="475px" objectFit="cover" borderRadius="10.931px" isLazy/>
                    <Degrade/>
                  </ImageDegrade>
                )
              }
              <TextContainer>
                <Text
                color="white"
                font="bold"
                fontSize="1.7rem"
                width={60}
                >{textImages?.secondText}</Text>
              </TextContainer>
            </ImageContainer>
            <ImageContainer $ratio={2}>
              {(layoutImagesHaveVideo && layoutImageHaveVideo?.image3) ? 
              (
                <Video isMp4 videoUrl={images[3]} hasAutoPlay hasLoop hasMuted width="100%" height="475px" objectFit="cover" borderRadius="10.931px" title="product"/>
               ) : (
                <Images src={images[3]} alt="Imagen producto" hasTransition={true} width="100%" height="475px" objectFit="cover" borderRadius="10.931px" isLazy/>
               )}
            </ImageContainer>
          </Row>
        </>
      ) : 
        <>
          <ImageContainer $ratio={4}>
              {
                (layoutImagesHaveVideo && layoutImageHaveVideo?.image1) ? (
                  <Video isMp4 videoUrl={images[1]} hasAutoPlay hasLoop hasMuted width="100%" height="320px" objectFit="cover" borderRadius="10.931px 10.931px 0 0 " title="product"/>
                ) : (
                  <Images src={images[1]} alt="Imagen producto" width="100%" height="320px" objectFit="cover" borderRadius="10.931px 10.931px 0 0 " isLazy/>
                )
              }
              <TextContainer>
                <Text
                color="wildViolet"
                font="bold"
                fontSize="1rem"
                >{textImages?.firstText}</Text>
              </TextContainer>
          </ImageContainer>

          <ImageContainer $ratio={4} $isLast>
            {
              (layoutImagesHaveVideo && layoutImageHaveVideo?.image2) ? (
                <Video isMp4 videoUrl={images[2]} hasAutoPlay hasLoop hasMuted width="100%" height="320px" objectFit="cover" borderRadius="10.931px 10.931px 0 0 " title="product"/>
                ) : (
                <Images src={images[2]} alt="Imagen producto" width="100%" height="320px" objectFit="cover" borderRadius="10.931px 10.931px 0 0 " isLazy/>
                )
            }
              <TextContainer>
                <Text
                color="wildViolet"
                font="bold"
                fontSize="1rem"
                >{textImages?.secondText}</Text>
              </TextContainer>
          </ImageContainer>
        </>
      }
    </Wrapper>
  );
};