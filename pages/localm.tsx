import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/getLandingSEO';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import faqQuestions from "../jsons/FrequentQuestions/Localm.json";
import { getHygraphId } from '@/utils/hygraphIds';
import Localm from '@/components/Pages/Localm/Localm';
import { IStore } from '@/state/types';
import { getLoadingRedirect } from '@/state/loading/loadingSelector';
import { GlobalSpinner } from "@/components/Molecules/GlobalSpinner/GlobalSpinner"
import { useSelector } from 'react-redux';

export const LocalmPage = ({ landingSEO, graphImageObject, graphWebPage, faqAccordion }: ILanding) => {
    useEffect(() => {
        topPage()
    }, [])
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))

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
            {!loadingRedirect ?
                <main>
                    <Localm />
                </main>
                : <GlobalSpinner/>
            }
        </>
    )
}

export default LocalmPage;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
    const landingSEO = await getLandingSEO(getHygraphId("localm"), "footer_static_seo_data")
    const graphImageObject = {
        "@type": "ImageObject",
        "@id": "https://calmessimple.com.ar/localm/#primaryimage",
        "url": "https://calmessimple.com.ar/wp-content/uploads/2022/09/portada_localm-1.webp",
        "width": 2592,
        "height": 1076
    }
    const graphWebPage = {
        "@type": "WebPage",
        "@id": "https://calmessimple.com.ar/localm/#webpage",
        "url": "https://calmessimple.com.ar/localm/",
        "inLanguage": "es",
        "name": "localm | Calm",
        "isPartOf": {
            "@id": "https://calmessimple.com.ar/#website"
        },
        "primaryImageOfPage": {
            "@id": "https://calmessimple.com.ar/localm/#primaryimage"
        },
        "datePublished": "2022-08-24T20:27:50+00:00",
        "dateModified": "2023-08-07T16:27:45+00:00"
    }
    return { props: { landingSEO, graphImageObject, graphWebPage, faqAccordion: faqQuestions } }
}