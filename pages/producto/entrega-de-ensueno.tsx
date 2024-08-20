import { GetStaticProps } from 'next'
import SEO from '@/utils/SEO/SEO'
import { ILanding } from '@/types'
import { getLandingSEO } from '@/utils/getLandingSEO';
import faqAccordion from '@/jsons/FrequentQuestions/EntregaDeEnsueno.json'
import { topPage } from '@/utils/topPage'
import { useEffect, useState } from 'react'
import { getHygraphId } from '@/utils/hygraphIds'
import EntregaDeEnsueno from '@/components/Pages/EntregaDeEnsueno/EntregaDeEnsueno';

export const CompromisoDescansados = ({
  landingSEO,
  graphImageObject,
  graphWebPage,
}: ILanding) => {
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
      {render && (
        <main>
          <EntregaDeEnsueno 
          items={faqAccordion}
           title="preguntas"
           boldTitle="frecuentes"/>
        </main>
      )}
    </>
  )
}

export default CompromisoDescansados

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("entrega-de-ensueno"), "other_product_seo_data")
  const graphImageObject = {
    '@type': 'ImageObject',
    '@id': 'https://calmessimple.com.ar/entrega-de-ensueno/#primaryimage',
    'url': 'https://calmessimple.com.ar/wp-content/uploads/2023/03/entrega_carrito.png',
  }
  const graphWebPage = {
    '@type': 'WebPage',
    '@id': 'https://calmessimple.com.ar/entrega-de-ensueno/#webpage',
    "url": 'https://calmessimple.com.ar/entrega-de-ensueno/',
    "inLanguage": 'es',
    "name": 'Entrega de Ensue\u00f1o | Calm',
    "isPartOf": {
      '@id': 'https://calmessimple.com.ar/#website',
    },
    "primaryImageOfPage": {
      '@id': 'https://calmessimple.com.ar/entrega-de-ensueno/#primaryimage',
    },
    "datePublished": '2023-03-08T10:53:02+00:00',
    "dateModified": '2023-08-18T14:22:21+00:00',
    "description":
      '\r\nentrega\r\nde ensueño\r\ndejamos tu habitación pipí cucú\r\nSobre el servicio\r\nNuestros productos son super fáciles de armar pero si necesitas que lo hagamos por vos, entrega de ensueño es el servicio ideal para que no tengas que preocuparte por nada.\r\nNuestros expertos van a abrir los productos, instalarlos, reciclar los envoltorios y siempre que vos quieras, se pueden llevar tu ex-colchón y/o base.\r\n[white_glove_price_landing]\r\nadicionales\r\nPara solicitar este servicio, tildá la opción de entrega de ensueño en los productos habilitados. Podés chequear si entrega de ensueño llega a tu domicilio introduciendo tu CP acá abajo\r\n\r\n\r\n\r\n;) Felicitaciones, entregamos en tu domicilio\r\n\r\nLamentablemente entrega de ensueño todavia no llega a tu domicilio :(\r\n\r\nhttps://calmessimple.com.ar/wp-content/uploads/2023/03/video_entregadeensueño.webm\r\n\r\n\r\nReciclamos el packaging de todos los productos que abrimos en entrega de ensueño y donamos tu ex-colchón y/o base para que otra familia pueda descansar mejor\r\npaso a paso de nuestra entrega de ensueño\r\n1\r\nte vamos a llamar media hora antes para confirmar que estés en tu domicilio\r\n2\r\nllegamos con todo lo necesario y liberamos el espacio donde vayas a querer tu nueva cama\r\n3\r\narmamos tu nueva cama sobre una alfombra para no dañar tu piso\r\n\r\nsi querés, también le colocamos las sábanas\r\n4\r\nnos llevamos todo el packaging y si vos querés, también nos llevamos tu ex-colchón y/o base para donar\r\n5\r\nlimpiamos la zona donde estuvimos trabajando\r\n6\r\nno nos vamos sin antes darte un regalito ;)\r\nsi tenes alguna otra duda, escribinos al chat\r\npreguntas frecuentes\r\n¿Qué pasa con el packaging?\r\nTodo restante del armado nos lo llevamos para que sea reciclado, así tu casita quede impecable y lista para el mejor descanso.\r\n¿Se llevan mi ex-colchón/ex-base?\r\n¡Si! Podemos retirar colchón y/o base siempre y cuando quepa en el ascensor del edificio y el chofer tenga lugar en su camioneta. En caso de que no entre en la camioneta, no te preocupes que vamos a coordinar con vos para otro día\r\n¿En que zonas ofrecen entrega de sueño?\r\nPor el momento lo tenemos disponible para una zona limitada, pero esperamos expandirlo pronto.\r\n¿Es reembolsable el servicio entrega de ensueño?\r\nEl servicio entrega de ensueño no es reembolsable. Todos nuestros productos tienen 30 noches de prueba. Si decidís devolver alguno de nuestros productos en los que solicitaste este servicio, en tu devolución sólo vas a ver reflejado el importe del producto.',
  }
  return { props: { landingSEO, graphImageObject, graphWebPage } }
}
