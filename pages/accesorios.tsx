import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import axios from 'axios';
import { getHygraphId } from '@/utils/hygraphIds';
import CategoryLanding from '@/components/Pages/CategoryLanding/CategoryLanding';
import { getLandingSEO } from "@/utils/hygraphHelper";
import { IStore } from '@/state/types';
import { getLoadingRedirect } from '@/state/loading/loadingSelector';
import { GlobalSpinner } from "@/components/Molecules/GlobalSpinner/GlobalSpinner"

export const AccesoriosCategory = ({landingSEO, products}: ICategoryLanding) => {
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))
  const dispatch = useDispatch()
  useEffect(() => {
    topPage()
    dispatch(onGetRelatedProducts("2196404"));
  }, [])
  return (
    <>
      <SEO
        title={landingSEO.title}
        description={landingSEO.description}
        imageSrc={landingSEO.image}
        url={landingSEO.url}
      />
    {!loadingRedirect ?
        <main>
          <CategoryLanding 
            category={{
              name: "accesorios",
              title:"Accesorios.",
              subtitle: "Elegí el complemento ideal para tu cuarto.",
              products:products,
              installments:12
            }}/>
        </main>
        : <GlobalSpinner/>
      }
    </>
  )
}

export default AccesoriosCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("accesorios-seo"))
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "2196404;2196410;1851789"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
    requestConfig
  );
  return { props: {landingSEO, products: await response.data} }
}