import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { getLandingSEO } from '@/utils/getLandingSEO';
import SEO from "../utils/SEO/SEO";
import { ILanding } from "@/types";
import { topPage } from "@/utils/topPage";
import { getHygraphId } from "@/utils/hygraphIds";
import InformationTyCPromos from "@/components/Pages/InformationTyCPromos/InformationTyCPromos"

export const TermsAndConditionPromotions = ({
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
        graphWebPage={graphWebPage}
        showCalmRichSnippet
      />
      {render && (
        <main>
          <InformationTyCPromos />
        </main>
      )}
    </>
  );
};

export default TermsAndConditionPromotions;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("tyc-promotion-landing"));
  const graphWebPage = {
    "@type": "WebPage",
    "@id":
      "https://calmessimple.com.ar/terminos-y-condiciones-de-promociones/#webpage",
    "url": "https://calmessimple.com.ar/terminos-y-condiciones-de-promociones/",
    "inLanguage": "es",
    "name": "terminos y condiciones de promociones | Calm",
    "isPartOf": {
      "@id": "https://calmessimple.com.ar/#website",
    },
    "datePublished": "2020-04-03T19:45:10+00:00",
    "dateModified": "2023-08-11T00:56:03+00:00",
  };
  return { props: { landingSEO, graphWebPage } };
};
