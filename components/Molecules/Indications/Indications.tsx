import { DivIndications } from "./styled";
import localms from "@/jsons/address_localm.json"
import Titles from "@/components/Atoms/Typography/Titles";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import ItemIndications from "./ItemIndications/ItemIndications";
import Separator from "@/components/Atoms/Separator/Separator";
const Indications = () => {
  return (
    <DivIndications>
      <Titles
        titleTag="h2"
        color="offBlack"
        font="extraBold"
        fontSize="1.7rem"
        letterSpacing="0.5px"
        responsiveMobile={{
            fontSize:"1.4rem"
        }}>Nuestros locales</Titles>
        <Margin margin="0.98rem" />
      {
        localms.map((localm, index) => (
          <div key={localm.address}>
            <ItemIndications direction={localm.address} serviceHours={localm.hours} urlMap={localm.url} />

            {index % 2 === 0 ? <Separator/> : <></>}
          </div>
        ))
      }
    </DivIndications >
  );
};

export default Indications;
