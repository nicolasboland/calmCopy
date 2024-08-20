import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { onGetTyCData } from "@/state/hygraph/hygraphActions";
import { getTYCData } from "@/state/hygraph/hygraphSelector";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Spinner from "@/components/Atoms/Spinner/Spinner";
import { TextContainer, LoaderSpinner } from "./styled"
import { useRouter } from "next/router";

interface TextOffer {
  html: string;
}

const TermsAndConditionLanding = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const termsAndConditions = useSelector(getTYCData)
  const [ loader, setLoader] = useState(true)
  const nochesDePruebaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    dispatch(onGetTyCData())
  }, [])
  useEffect(() => {
    if (termsAndConditions) {
      setLoader(false)
    } else {
      setLoader(true)
    }
  }, [termsAndConditions])

  
  useEffect(() => {
    const isRedirected = router.asPath.includes("nochesPrueba")
    const nochesDePrueba = document.getElementById("nochesPrueba")

    if (nochesDePrueba && isRedirected && nochesDePruebaRef.current) {
      nochesDePruebaRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [router.asPath, nochesDePruebaRef, termsAndConditions]);

  return (
    <>
    {
      loader ? (
        <LoaderSpinner>
          <Spinner
          isBlack
          isCenterScreen/>
        </LoaderSpinner>
      ) : (
        <Margin margin="0% 15% 0% 15%" marginMobile="0% 3% 0% 3%">
        <Margin margin="4rem 0px 4rem 0px">
          <Titles
          font="bold"
          fontSize="2em"
          align="center"
          color="offBlack"
          >
            Términos y Condiciones
          </Titles>
        </Margin>
        
        <Text
        align="left"
        color="steel"
        lineHeight="1.618"
        hasLink
        font="regular"
        >
            Los presentes Términos y Condiciones rigen la relación entre usted (en
            adelante referido como “Usuario”) y SLEEP CALM SA (en adelante
            referido como “Calm”) con relación a los servicios y productos
            disponibles al Usuario a través del sitio web www.calmessimple.com.ar
            (en adelante referido como “Sitio Web”); a su vez, los presentes
            términos y condiciones regulan el uso del Sitio Web, del que Calm es
            propietario.
        </Text>
        {termsAndConditions  && (
          termsAndConditions.textOffer.map((text: TextOffer) => {
            var separator = text.html.split("</h4>", 2);
            const title = separator[0].replace(/<\/?h4>|<\/?strong>/g, '');
            const addBr = separator[1].replace(/<p>/g, " ").replace(/<\/p>/g, '<br><br>');
  
            return (
              <div key={separator[0]}>
                <Margin margin="2rem 0 2rem 0">
                  <Titles
                  align="center"
                  font="medium"
                  color="thamarBlack"
                  fontSize="1.618em"
                  titleTag="h4"
                  >
                    {title}
                  </Titles>
                </Margin>
  
                <TextContainer>
                  {parse(addBr)}
                </TextContainer>
              </div>
            );
          })
        )}
        <Margin margin="0 0 2rem 0"/>
      </Margin>
      )
    }
    </>
  );
};

export default TermsAndConditionLanding;
