import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import CapasCategory from "../CapasCategory/CapasCategory";
import FirmezaColchonCategory from "@/components/Organisms/FirmezaColchonCategory/FirmezaColchonCategory"
import InfoColchonCategory from "@/components/Molecules/InfoColchonCategory/InfoColchonCategory";
import ColchonCategory from "@/utils/colchonCategory.json";
import { Container } from "./styled"
import MainBlockCategory from "../MainBlockCategory/MainBlockCategory";
import { IProps } from "./types"
import { IProduct } from "@/state/products/types";
import { useEffect, useState } from "react";
import { getCategoryAccesorios } from "@/utils/CategoryColchonRequests"
import CategoryProductsCards from "../CategoryProductsCard/CategoryProductsCard";

const SpecsColchon = ({category}: IProps) => {
  const [accesoriosData, setAccesoriosData] = useState<IProduct[]>()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getCategoryAccesorios();
          setAccesoriosData(result)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <Container id="pickColchon">
      <Titles
        titleTag="h3"
        font="extraBold"
        fontSize="2.1em"
        color="offBlack"
        align="center"
        responsiveMobile={{
            fontSize: "1.7em"
      }}>
        Encontrá tu colchón ideal
      </Titles>


      <Text
        color="millionGray"
        font="medium"
        fontSize="1.3rem"
        align="center"
        responsiveMobile={{
            fontSize: "1.2em"
        }}>
          Usá nuestra tabla comparativa de colchones.
      </Text>

      <Margin margin="1rem"/>

      <MainBlockCategory
      category={category}
      />
      
      <div id="comparition">
        <CapasCategory
          title={ColchonCategory.capas.title}
          original={ColchonCategory.capas.original}
          hibrido={ColchonCategory.capas.hibrido}
        />

        <FirmezaColchonCategory
          title={ColchonCategory.firmeza.title}
          original={ColchonCategory.firmeza.original}
          hibrido={ColchonCategory.firmeza.hibrido}
        />

        <InfoColchonCategory
          title={ColchonCategory.durabilidad.title}
          originalInfo={ColchonCategory.durabilidad.original}
          hibridoInfo={ColchonCategory.durabilidad.hibrido}
        />

        <InfoColchonCategory
          title={ColchonCategory.circulación.title}
          originalInfo={ColchonCategory.circulación.original}
          hibridoInfo={ColchonCategory.circulación.hibrido}
          isCirculacion
          mobileLeftText
        />
      </div>
        <InfoColchonCategory
          title={ColchonCategory.habitos.title}
          originalInfo={ColchonCategory.habitos.original}
          hibridoInfo={ColchonCategory.habitos.hibrido}
          mobileLeftText
        />

      {
        accesoriosData && /* loaders */
        <CategoryProductsCards 
          title={"Otros colchones"}
          items={accesoriosData}
          installments={6}
        />
      }
    </Container>
  );
};

export default SpecsColchon;
