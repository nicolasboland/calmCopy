"use client"

import { useEffect, useState } from "react";
import { StyledContainer, NewsLetterContainer, InfoColumn } from "./styled";
import { useRouter } from "next/router";
import { productURLRedirectionById } from "@/utils/productURLById";
import FooterColumn from "@/components/Molecules/FooterColumn/FooterColumn";
import SocialImages from "@/components/Molecules/SocialImages/SocialImages";
import MailChimpForm from "@/components/Molecules/MailchimpForm/MailchimpForm";
import Titles from "@/components/Atoms/Typography/Titles";
import PaymentMethodImages from "@/components/Molecules/PaymentMethodImages/PaymentMethodImages";
import FooterPaymentMethods from "@/utils/FooterPaymentMethods.json"
import { onShowCart, onCloseCart } from "@/state/cart/cartActions"
import { useDispatch, useSelector } from "react-redux"
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv"

const Footer = () => {
    const router = useRouter();
    const dispatch = useDispatch()

    const noFooterRoutes = ["/metodo", "/pago", "/mantenimiento", "/checkout-pago"];
    const showFooter= !noFooterRoutes.some(route => router.asPath.includes(route));

    useEffect(() => {
        if (showFooter) {
            const handleScroll = () => {
                const footer = document.getElementById('footer');
                if (footer) {
                  const footerPos = footer.getBoundingClientRect();
                  const pantallaHeight = window.innerHeight;
                  const footerBottomPos = footerPos.bottom;
                  if (footerPos.top < pantallaHeight && footerBottomPos < pantallaHeight) {
                      dispatch(onCloseCart())
                  } else if (!(footerBottomPos < pantallaHeight) && footerPos.top < pantallaHeight) {
                      dispatch(onShowCart())
                  }
                }
              };
              window.addEventListener('scroll', handleScroll);
              return () => window.removeEventListener('scroll', handleScroll);
        }
      }, []);

    return (
    <StyledContainer $showFooter={showFooter} id="footer">
        <InfoColumn>
            <FooterColumn
                title={'productos'}
                items={[
                    {headerHref: productURLRedirectionByEnv('/colchones/'), header: 'COLCHONES', links:[
                        {text:'colchón calm', href: productURLRedirectionById("334")},
                        {text:'colchón híbrido', href: productURLRedirectionById("2067781")},
                        {text:'colchón bb', href: productURLRedirectionById("1835498")},
                        {text:'colchón para perros', href: productURLRedirectionById("1835538")}
                    ]},
                    {headerHref: productURLRedirectionByEnv('/bases/'), header:'BASES', links:[
                        {text:'base de cama calm', href: productURLRedirectionById("339")},
                        {text:'sommier calm', href: productURLRedirectionById("1993786")}
                    ]},
                    {headerHref: productURLRedirectionByEnv('/almohadas/'), header:'ALMOHADAS', links:[
                            {text:'alta almohada', href: productURLRedirectionById("1855350")},
                            {text:'almohada doble sensación', href: productURLRedirectionById("1831947")},
                            {text:'almohada infinita', href: productURLRedirectionById("724708")},
                            {text:'almohada inteligente', href: productURLRedirectionById("537")}                    
                    ]}
                ]}
            />
            <FooterColumn
                items={[
                    {headerHref: productURLRedirectionByEnv('/ropa-de-cama/'), header: 'ROPA DE CAMA', links:[
                        {text:'edredón abrazo', href: productURLRedirectionById("1851772")},
                        {text:'funda tusor 4 estaciones', href: productURLRedirectionById("1851405")},
                        {text:'sábanas algodon & frescura', href: productURLRedirectionById("1851178")},
                        {text:'sábanas suavidad', href: productURLRedirectionById("1835935")},
                        {text:'protector de colchón', href: productURLRedirectionById("1851789")}
                    ]},
                    {headerHref: productURLRedirectionByEnv(`/feria`), header:'FERIA CALM', links:[]},
                    {headerHref: productURLRedirectionByEnv('/producto/entrega-de-ensueno/'), header:'entrega de ensueño', links:[]}
                ]}
            />
        </InfoColumn>

        <InfoColumn>
                <FooterColumn
                    title={'nosotros'}
                    items={[
                        {links:[
                            {text:'¿qué es calm?', href: productURLRedirectionByEnv('/quienes-somos')},
                            {text:'preguntas frecuentes', href: productURLRedirectionByEnv('/preguntas-frecuentes')},
                            {text:'opiniones', href: productURLRedirectionByEnv('/opiniones-reales-de-clientes-reales')},
                            {text:'blog', href: productURLRedirectionByEnv('/blog/')},                    
                            {text:'sumate', href: productURLRedirectionByEnv('/sumate/')},                    
                            {text:'compromiso', href: productURLRedirectionByEnv('/compromiso-descansados')},                    
                            {text:'donde encontrarnos', href: productURLRedirectionByEnv('/localm')},                    
                            {text:'rueda de la calma', href: productURLRedirectionByEnv('/rueda-de-la-calma')}, 
                            {text:'siestario calm', href: productURLRedirectionByEnv('/siestario-calm')}                      
                        ]}
                    ]}
                />
                <FooterColumn
                    title={'contacto'}
                    items={[
                        {links:[
                            {text:'tel: +54 9 11 4049-0344', href:"https://wa.me/message/XBAEHPNQMBD4A1"},
                            {text:'hola@calmessimple.com.ar', href:"mailto:hola@calmessimple.com.ar"},
                            {text:'términos y condiciones', href: productURLRedirectionByEnv('/terminos-y-condiciones/')},
                            {text:'arrepentimiento de compra', href: productURLRedirectionByEnv('/cancelar-compra/')},
                            {text:'godoy cruz 1737, caba', href:"https://www.google.com/maps/place/Calm+es+simple/@-34.5874103,-58.43542,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb59d58aacdfd:0x71f98f0b710a8bfe!8m2!3d-34.5874103!4d-58.4332313"},                    
                            {text:'santos dumont 3507, caba', href:"https://www.google.com/maps/place/Calm+es+simple/@-34.5834167,-58.4503761,17z/data=!4m6!3m5!1s0x95bcb5b6d532d689:0x51c26e4d59f2c83a!8m2!3d-34.5834211!4d-58.4478012!16s%2Fg%2F11kq2dklg1?entry=ttu"},                    
                            {text:'retirar mi compra en sucursal', href: productURLRedirectionByEnv('/pick-up/')},
                        ]}
                    ]}
                />
        </InfoColumn>

        <NewsLetterContainer>
            <Titles 
            titleTag="h3"
            color="offBlack"
            font="bold"
            fontSize="1.25rem">suscribite al newsletter</Titles>

            <MailChimpForm tag="footer" />

            <SocialImages />

            <PaymentMethodImages items={FooterPaymentMethods} />
        </NewsLetterContainer>
    </StyledContainer>
    )
}

export default Footer;