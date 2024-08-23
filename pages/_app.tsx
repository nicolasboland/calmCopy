import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Theme from '../utils/Theme'
import store from '@/state/store';
import { Provider } from 'react-redux';
import { HelmetProvider, Helmet } from "react-helmet-async";
import NavBar from '@/components/Organisms/NavBar/NavBar';
import Footer from '@/components/Organisms/Footer/Footer';
import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apolloClient';
import PopupPromotion from "@/components/Organisms/PopUp/PopUp";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Script from "next/script";
import * as fbq from "@/lib/fpixel";
import { CursorRedirectStyles } from '@/components/Atoms/Typography/redirectionStyles';
import axios from 'axios';
import dynamic from 'next/dynamic';
const NotChatBotChat = dynamic(() => import('@/components/Molecules/Chat/NotChatBotChat/NotChatBotChat'), { ssr: false });
import { Be_Vietnam_Pro } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const vietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-vietnam-pro',
  display: 'swap',
});

export default ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
/* 
  const [headbannerData, setHeadbannerData] = useState<any>(null);

  useEffect(() => {
    const fetchHeadBanners = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_HYGRAPH_URL}/api/hygraph/head_banners_data`
        );
        setHeadbannerData(response.data.data.headBanners);
      } catch (error) {
        console.error("Error fetching head banners data:", error);
      } 
    };
    fetchHeadBanners();
  }, []);
 */
  useEffect(() => {
    if(process.env.NEXT_PUBLIC_MANTAINANCE_MODE == "true" && !router.asPath.includes("mantenimiento")) {
      router.push("/mantenimiento")
    }
  }, [router])

  useEffect(() => {
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <HelmetProvider>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-KV4GTWK`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_PIXELID}&ev=PageView&noscript=1`}
        />
      </noscript>

      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_PIXELID});
          `,
        }}
      />

      <Script 
        id="microsoft-clarity-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "kdkq158x5q");
          `,
        }}
      />

      <ApolloProvider client={client}>
        <Provider store={store}>
          <div className={vietnamPro.variable}>
            <Theme>
              <SpeedInsights/>
              {router && !router.asPath.includes("mantenimiento") && 
                  <NotChatBotChat /> 
              }
              <CursorRedirectStyles/>
              <NavBar /* headbannerData={headbannerData} *//>
              <PopupPromotion/>
              <Component {...pageProps} />
              <Footer />
            </Theme>
          </div>
        </Provider>
      </ApolloProvider>
    </HelmetProvider>
  );
}
