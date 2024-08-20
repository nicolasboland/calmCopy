import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ILanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import NotFoundComponent from '@/components/Organisms/404/404-Component';
import { getHygraphId } from '@/utils/hygraphIds';
import { getLandingSEO } from '@/utils/getLandingSEO';

export const NotFoundLanding = ({landingSEO, graphImageObject, graphWebPage, faqAccordion}: ILanding) => {
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
        faqAccordion={faqAccordion}
        showCalmRichSnippet
      />
      {render && 
        <main>
          <NotFoundComponent isYellowTitle={true}/>
        </main>
      }
    </>
  )
}

export default NotFoundLanding;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("404"))
  return { props: {landingSEO} }
}