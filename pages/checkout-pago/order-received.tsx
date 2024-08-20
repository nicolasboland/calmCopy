import { GetStaticProps } from 'next'
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { useEffect, useState } from 'react';
import { topPage } from '@/utils/topPage';
import SEO from '@/utils/SEO/SEO';
import ThankYoucomponent from '@/components/Organisms/Checkout/ThankUcomponent/thankUcomponent';
import { getHygraphId } from '@/utils/hygraphIds';

export const OrderReceived = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const [render, setRender] = useState(false)


  useEffect(() => {
    topPage()
    setRender(true)
  }, [])
  

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
      {render &&
        <main>
          <ThankYoucomponent/>
        </main>
      }
    </>
  )
}

export default OrderReceived;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("pago"))

  return { props: {landingSEO} }
}