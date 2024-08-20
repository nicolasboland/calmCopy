import { GetStaticProps } from 'next'
import SEO from '../../utils/SEO/SEO';
import { ILanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import { getHygraphId } from '@/utils/hygraphIds';
import { getLandingSEO } from '@/utils/getLandingSEO';
import Mantenimiento from '@/components/Pages/Mantenimiento/Mantenimiento';

export const MantainanceLanding = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
          <Mantenimiento />
        </main>
      }
    </>
  )
}

export default MantainanceLanding;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("mantenimiento"))

  return { props: {landingSEO} }
}