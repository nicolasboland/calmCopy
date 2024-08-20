import TitleDescriptionAndMedia from "@/components/Molecules/TitleDescriptionAndMedia/TitleDescriptionAndMedia"
import RelatedProducts from "@/components/Organisms/RelatedProducts/RelatedProducts"
import ShoppingExperience from "@/components/Organisms/ShoppingExperience/ShoppingExperience"
import { IStore } from '@/state/types';
import { getCurrentProductsRelated } from '@/state/products/productsSelector';
import { useSelector } from 'react-redux';
import HeaderBackColor from "@/components/Organisms/HeaderBackColor/HeaderBackColor";
import Text from "@/components/Atoms/Typography/Text";
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv"

const QuienesSomos = () => {
  const currentProductsRelated = useSelector((store: IStore) => getCurrentProductsRelated(store))

    return(
        <>
            <HeaderBackColor 
                backgroundColor="yellowCalm"
                heightMobile= "80vh"
                title={(
                    <>
                    Somos un equipo <br /> inspirado <br /> por hacer las cosas <br /> simples.
                    </>
                )}
                titleColor="white"
                titleFont="extraBold"
                titleFontSize="70px"
                titleLineHeight="1em"
                subtitle={(
                    <>
                    <Text
                        textTag="span"
                        font="extraBold">
                    Redefinimos la experiencia de las personas a través de lo 
                    simple.{" "}<br />
                    </Text>
                    Ofrecemos a cada cliente productos de la más alta calidad, <br />
                    precios honestos y 30 noches de prueba en casa.
                    </>
                )}
                subtitleColor="white"
                subtitleFont="regular"
                subtitleFontSize="32px"
                subtitleLineHeight="1.1em"
                fontSizeMobile="1.2em"
                />

            <TitleDescriptionAndMedia 
                image={{
                    src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/490eba53-775b-41ce-24f5-1cc06cc48900/fit=cover",
                    alt:"el equipo de calm"
                }}    
                text={{
                    boldTitle: "Despertando una industria dormida",
                    text: "Calm nace como un proyecto de dos amigos que encontraron en la experiencia de compra de colchones la oportunidad de despertar una industria dormida. Hoy somos un equipo de 80 personas que se agranda mes a mes y llegamos a más de 300 ciudades de todo el país."   
                }}
                button={{
                    text:"¡Conocé nuestra historia!",
                    href:productURLRedirectionByEnv('/nuestra-historia')}}
                maxWidth="1040px"    
            />

            <TitleDescriptionAndMedia 
                imageRight={{
                    src:"https://calmessimple.com.ar/wp-content/uploads/2021/10/OficinaCalm.jpg",
                    alt:"la ofi de calm"
                }}    
                text={{
                    boldTitle: "Queremos mejorar el bienestar de las personas, en serio.",
                    text: "Nos comprometemos al 100% con nuestra misión: mejorar notablemente el bienestar de las personas a través de lo simple. Trabajamos con organizaciones de impacto social para llegar a más personas y aportar desde nuestro lugar."   
                }}
                button={{
                    text:"¡Quiero saber más!",
                    href:productURLRedirectionByEnv('/compromiso-descansados')}}
                maxWidth="1040px"    

            />
             <TitleDescriptionAndMedia 
                videoLeft={{
                 allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                 title:"Cultura Calm 💛",
                 src:"https://www.youtube.com/embed/x2KIxQYrtsM?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcalmessimple.com.ar&amp;widgetid=1"
                }}    
                text={{
                    boldTitle: "Nuestro principal valor es el equipo",
                    text: " Queremos personas increíbles en Calm. El compromiso con nuestra misión requiere de un equipo de alto rendimiento que esté a la altura del desafío y trabajamos continuamente para mantenerlo en ese nivel."   
                }}
                button={{
                    text:"¡Me quiero sumar!",
                    href:productURLRedirectionByEnv('/sumate')}}
                  

            />
            <ShoppingExperience />
            <RelatedProducts relatedItems={currentProductsRelated} title="tu descanso" boldTitle="ideal" isYellowTitle/>
        </>
    )
}
export default QuienesSomos