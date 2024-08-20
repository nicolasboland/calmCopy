import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { getLandingSEO } from "@/utils/hygraphHelper";
import SEO from "../utils/SEO/SEO";
import { ILanding } from "@/types";
import { topPage } from "@/utils/topPage";
import Siestario from "@/components/Pages/Siestario/Siestario";
import faqAccordion from "@/jsons/FrequentQuestions/SiestarioQuestions.json"
import { getHygraphId } from '@/utils/hygraphIds'

export const SiestarioPage = ({
  landingSEO,
  graphImageObject,
  graphWebPage,
}: ILanding) => {
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
        faqAccordion={faqAccordion}
        graphWebPage={graphWebPage}
        showCalmRichSnippet
      />
      {render && (
        <main>
          <Siestario />
        </main>
      )}
    </>
  );
};

export default SiestarioPage;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("siestario-calm"))
  const graphImageObject = {
    "@type": "ImageObject",
    "@id": "https://calmessimple.com.ar/siestario-calm/#primaryimage",
    "url": "https://calmessimple.com.ar/wp-content/uploads/2023/08/Mask-group-1.webp",
    "width": 800,
    "height": 800
}
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/siestario-calm/#webpage",
    "url":"https://calmessimple.com.ar/siestario-calm/",
    "inLanguage":"es",
    "name":"Siestario Calm | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage": {
      "@id": "https://calmessimple.com.ar/siestario-calm/#primaryimage"
  },
    "datePublished":"2023-07-25T13:16:22+00:00",
    "dateModified":"2023-08-22T19:06:43+00:00"
  }
  return { props: { landingSEO: landingSEO ?? {title: "", description: "", image: "", url: ""}, graphWebPage, graphImageObject } };
};
