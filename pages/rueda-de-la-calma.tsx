import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { getLandingSEO } from "@/utils/hygraphHelper";
import SEO from "../utils/SEO/SEO";
import { ILanding } from "@/types";
import { topPage } from "@/utils/topPage";
import RuedaDeCalmaComponent from "@/components/Pages/RuedaDeCalma/RuedaDeCalma";
import faqAccordionJson from '@/jsons/FrequentQuestions/FrequentQuestions.json'
import { getHygraphId } from '@/utils/hygraphIds'

export const RuedaDeCalma = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
        faqAccordion={faqAccordionJson.RuedaDeLaCalma}
        showCalmRichSnippet
      />
      {render && (
        <main>
            <RuedaDeCalmaComponent/>
        </main>
      )}
    </>
  );
};

export default RuedaDeCalma;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("rueda-de-la-calma"))
  const graphImageObject = {
    "@type": "ImageObject",
    "@id": "https://calmessimple.com.ar/rueda-de-la-calma/#primaryimage",
    "url": "https://calmessimple.com.ar/wp-content/uploads/2023/09/tabla_rdc.webp",
    "width": 901,
    "height": 536
}
  const graphWebPage = {
    "@type": "WebPage",
    "@id":
      "https://calmessimple.com.ar/rueda-de-la-calma/#webpage",
    "url": "https://calmessimple.com.ar/rueda-de-la-calma/",
    "inLanguage": "es",
    "name": "Rueda de La Calma | Calm",
    "isPartOf": {
      "@id": "https://calmessimple.com.ar/#website",
    },
    "primaryImageOfPage": {
        "@id": "https://calmessimple.com.ar/rueda-de-la-calma/#primaryimage"
    },
    "datePublished": "2020-09-02T14:36:54+00:00",
    "dateModified": "2023-09-15T15:54:38+00:00",
  };
  return { props: { landingSEO: landingSEO ?? {title: "", description: "", image: "", url: ""}, graphWebPage, graphImageObject } };
};
