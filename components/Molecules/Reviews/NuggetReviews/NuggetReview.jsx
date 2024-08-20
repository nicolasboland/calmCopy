import { useEffect, useState } from 'react';
import { Wrapper } from "./styled"
import { useScript } from '@/hooks/useScript';
import ModalReviews from '@/components/Organisms/Modals/ModalReviews/ModalReviews';

const NuggetReview = ({skus}) => {

  const [modalHandle, setModalHandle] = useState(false)

  const showModal = () => {
    setModalHandle(!modalHandle)
  }

  const [deleteFirstScript, setDeleteFirstScript] = useState(null);
  const [deleteSecondScript, setDeleteSecondScript] = useState(null);

    useEffect(() => {
      const script1 = useScript("https://widget.reviews.co.uk/product/dist.js");
      const script2 = useScript("https://widget.reviews.co.uk/rating-snippet/dist.js");
    
      Promise.all([script1, script2])
      .then(([script1, script2]) => {
        setDeleteFirstScript(script1)
        setDeleteSecondScript(script2)
        if(ratingSnippet) {
          ratingSnippet("ruk_rating_snippet",{
            store: "calmessimple.com.ar",
            color: "#F5A203",
            linebreak: false,
            text: "Reseñas",
            usePolaris: true,
            lang: 'es',
            minRating: 4,
            style: {
              fontFamily: "Gilroy-Regular, sans-serif"
            }
          });
        }
      })
        .catch((error) => {
          console.error("Error al cargar el script:", error);
        });

        return () => {
        deleteFirstScript && document.head.removeChild(deleteFirstScript);
        deleteSecondScript && document.head.removeChild(deleteSecondScript);
        };
      }, []);
    
      return (
        <Wrapper>
             <div onClick={showModal} className="ruk_rating_snippet" data-sku={skus}></div>
             {modalHandle && <ModalReviews CloseHandle={showModal} skus={skus}/>}
        </Wrapper>
        
      );
    }

export default NuggetReview;