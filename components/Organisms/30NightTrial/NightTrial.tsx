import { productURLRedirectionById } from "@/utils/productURLById";
import { DivTrials, DivInfo } from "./styled";
import TitleSubtitleButton from "@/components/Molecules/TitleSubtitleButton/TitleSubtitleButton";


const NightTrial = () => {
  return (
    <DivTrials>
      <DivInfo>
      <TitleSubtitleButton title={{
        text:(
          <>
          Lo probás 30 noches en <br/>tu casa,
          </>
        ),
        boldTitle:(
        <>
           no 5 minutos con <br/>un vendedor al lado
          </>
        ),
        titleTag:"h3",
        font:"light",
        fontSize: "2.4em",
        responsiveMobile:{
          fontSize: "22px"
        },
        color: "white"
        }}
        button={{
          href:`${productURLRedirectionById("334")}`,
          text: "¡quiero probarlo!",
          textColor: "white",
          borderColor: "white",
          font: "extraBold",
          fontSize: "1.4em",
          backgroundColorHover: "decorYellow",
          size:"small"
        }}
      />
      </DivInfo>
    </DivTrials>
  );
};

export default NightTrial;
