import { useEffect, useState } from 'react'
import { NuggetWrapper } from "./styled.ts";
import { useScript } from '../../../../hooks/useScript.ts'

export const SeparatedReview = ({skus}) => {

  const [deleteScript, setDeleteScript] = useState(null);
  
  useEffect(() => {
    useScript("https://widget.reviews.io/modern-widgets/nuggets.js")
    .then((loadedScript) => {
      setDeleteScript(loadedScript);
    }).catch((error) => {
      console.error("Error al cargar el script:", error);
    });

    return () => {
      deleteScript && document.head.removeChild(deleteScript);
    };
  }, []);

  return (
    <NuggetWrapper>
      <div 
        id="reviews-io-nuggets-widget"
        widget-id="xFoniUf9ZQEsSKJm"
        store-name="calmessimple.com.ar"
        lang='es'
        sku={skus}
      ></div>
    </NuggetWrapper>
  )
}
