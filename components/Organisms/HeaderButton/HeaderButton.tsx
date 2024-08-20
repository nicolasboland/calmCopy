import {
  DivDonate,
  DivImage,
  DivText,
} from "./styled";
import Images from "@/components/Atoms/Images/Images";
import TitleSubtitleButton from "@/components/Molecules/TitleSubtitleButton/TitleSubtitleButton";
import { useWidth } from "@/hooks/useWidth";
import { IProps } from "./types"
import Pills from "@/components/Atoms/Pills/Pills";
  
  const HeaderButton = ({ 
    isCompromiso,  
    isFeria,
    isProduct,
    image,
    altImage,
    title,
    subTitle,
    textButton,
    redirectButton }: IProps) => {
     
  const width = useWidth()
  const breakpoint = 768;
  const mobileView = width >= breakpoint

    return (
      <DivDonate $isFeria={isFeria} $isProduct={isProduct}>
        <DivImage>
          {width < breakpoint && isCompromiso ? (
          <Images
            src="https://calmessimple.com.ar/wp-content/uploads/2021/09/LogoHSSolidariX-10_Mobile-03.svg"
            alt="compromiso descansados"
            width="60%"
          />
        ) : (
          <Images
          src={image}
          alt={altImage}
          width="50%"
          />
        )}
        </DivImage>
        <DivText>
          {
            isFeria && <Pills isFeria>STOCK LIMITADO</Pills>
          }
          <TitleSubtitleButton 
            title={{
              text:title,
              titleTag: "h4",
              color:'white',
              font:"extraBold",
              fontSize:"2.8em",
              responsiveMobile:{
                fontSize:"25px",
                align: "center"
              },
              align: "left"
            }}
            subtitle={{
              text: subTitle,
              color: "white",
              font:"regular",
              fontSize: "1.3em",
              responsiveMobile:{
                fontSize:"15px"
              }
            }}
            button={{
              text: textButton,
              href: redirectButton,
              backgroundColor: isFeria ? "darkerFadingHorizon" : isProduct ? "yellowCalm" : isCompromiso && mobileView ? "yellowCalm" : "electricIndigo",
              backgroundColorHover: "auberginePearl",
              textColor: "white",
              fontSize: "1.1em",
              font: "extraBold",
              size: "big"
            }}
            margin="10px"
            />
        </DivText>
      </DivDonate>
    );
  };
  
  export default HeaderButton;
  