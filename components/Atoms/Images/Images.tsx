import { ImagesProps } from "./types"
import { ImageStyles, StyledLCPImage } from "./styled"

const Images = ({
  children,
  src,
  alt,
  width,
  height,
  objectFit,
  hasTransition,
  borderRadius,
  responsiveMobile,
  widthLCP,
  heightLCP,
  isLazy,
  priority,
  widthHTML,
  heightHTML,
  sizes,
  aspectRatio,
  title
}: ImagesProps) => {
  return (
    <>
    {
      (widthLCP && heightLCP) ? (
      <StyledLCPImage
        src={src} 
        alt={alt} 
        width={widthLCP}
        height={heightLCP}
        $width={width} 
        $height={height} 
        /* layout="responsive" */
        $borderRadius={borderRadius}
        priority={priority}
        $responsiveMobile={responsiveMobile}
        sizes={sizes}
        $aspectRatio={aspectRatio}
        title={title ?? undefined}
      />
      ) : (
        <ImageStyles 
        src={src} 
        alt={alt} 
        $objectFit={objectFit} 
        $width={width} 
        $height={height} 
        $transition={hasTransition ? "transform 1s ease" : "none"}
        $transform={hasTransition ? "scale(1.05)" : "none"}
        $responsiveMobile={responsiveMobile}
        $borderRadius={borderRadius}
        loading={isLazy ? "lazy" : undefined}
        width={widthHTML}
        height={heightHTML}
        sizes={sizes}
        title={title ?? undefined}
      >
        {children}
      </ImageStyles>
      )
    }
    </>
      
  );
};

export default Images;