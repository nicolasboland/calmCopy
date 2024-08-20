import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { getLandingSEO } from "@/utils/hygraphHelper";
import SEO from "../utils/SEO/SEO";
import { ILanding } from "@/types";
import { topPage } from "@/utils/topPage";
import SeguimientoLanding from "@/components/Pages/Seguimiento/Seguimiento";
import { getHygraphId } from '@/utils/hygraphIds'

export const Seguimiento = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    topPage();
    setRender(true);
  }, []);

  return (
    <>
      <SEO
        title={landingSEO.title}
        description={landingSEO.description}
        imageSrc={landingSEO.image}
        url={landingSEO.url}
        graphImageObject={graphImageObject}
        graphWebPage={graphWebPage}
      />
      {render && (
        <main>
            <SeguimientoLanding/>
        </main>
      )}
    </>
  );
};

export default Seguimiento;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("seguimiento"))
  const graphWebPage = {
    "@type": "WebPage",
    "@id":
      "https://calmessimple.com.ar/seguimiento",
    "url": "https://calmessimple.com.ar/seguimiento",
    "inLanguage": "es",
    "name": "Seguimiento - Calm",
    "description":"Calm es simple",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
     }
  };
  return { props: { landingSEO: landingSEO ?? {title: "", description: "", image: "", url: ""}, graphWebPage } };
};
