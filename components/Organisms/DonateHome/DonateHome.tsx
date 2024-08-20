import {
    DivDonate,
    DivImage,
    DivText,
  } from "./styled";
  import Images from "@/components/Atoms/Images/Images";
  import TitleSubtitleButton from "@/components/Molecules/TitleSubtitleButton/TitleSubtitleButton";
  import {IProps} from "./types"
  
  const DonateHome = ({withBorder}: IProps) => {
    return (
      <DivDonate $withBorder={withBorder}>
        <DivImage>
          <Images
            src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a353d3ad-9c02-4662-34d0-e3cb1b164400/fit=cover"
            data-src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a353d3ad-9c02-4662-34d0-e3cb1b164400/fit=cover"
            alt="compromiso solidario"
            width="290px"
            responsiveMobile={{
              width: "190px",
            }}
          />
        </DivImage>
        <DivText>
          <TitleSubtitleButton 
        title={{
          text:(
            <>
            Doná tu ex colchón <br />
          y le buscamos un <br />
          nuevo hogar.
            </>
          ),
          titleTag: "h3",
          color:'white',
          font:"bold",
          fontSize:"2.6em",
          responsiveMobile:{
            fontSize:"25px",
            align: "center"
          },
          align: "left"
        }}
        subtitle={{
          text:'Ahora no 1, sino 2 van a descansar mejor',
          color: "white",
          font:"regular",
          fontSize: "1.3em",
          responsiveMobile:{
            fontSize:"15px"
          }
        }}
        button={{
          text:`¡Quiero Donar!`,
          href: "https://calmessimple.com.ar/compromiso-descansados/",
          backgroundColor: "yellowCalm",
          backgroundColorHover: "auberginePearl",
          textColor: "white",
          fontSize: "1.1em",
          font: "extraBold",
          size: "small"
        }}
        margin="10px"
        />

        </DivText>
      </DivDonate>
    );
  };
  
  export default DonateHome;
  