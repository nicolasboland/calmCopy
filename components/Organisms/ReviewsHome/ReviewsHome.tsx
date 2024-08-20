import { useEffect, useState } from "react";
import { Bold, Container, ButtonReviews } from "./styled";
import { Helmet } from "react-helmet-async";
import { useScript } from '@/hooks/useScript'

import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Button from "@/components/Atoms/Buttons/Button";

interface IProps {
  isHotsale?: boolean
}
const ReviewsHome = ({isHotsale}  : IProps) => {

  const [deleteScript, setDeleteScript] = useState<HTMLScriptElement | null>(null);

  useEffect(() => {
    useScript("https://widget.reviews.io/carousel-inline-iframeless/dist.js?_t=2021072217")
    .then((loadedScript: HTMLScriptElement) => {
      setDeleteScript(loadedScript)
        const scriptColchones = document.createElement("script");
        scriptColchones.innerHTML = `
        new carouselInlineWidget('reviewsio-carousel-widget',{
              /*Your REVIEWS.io account ID:*/
              store: 'calmessimple.com.ar',
              sku: '',
              lang: 'en',
              carousel_type: 'default',
              styles_carousel: 'CarouselWidget--sideHeader--withcards  ',
        
              /*Widget settings:*/
              options:{
                general:{
                  /*What reviews should the widget display? Available options: company, product, third_party. You can choose one type or multiple separated by comma.*/
                  review_type: 'company',
                  /*Minimum number of reviews required for widget to be displayed*/
                  min_reviews: '1',
                  /*Maximum number of reviews to include in the carousel widget.*/
                  max_reviews: '20',
                  address_format: 'CITY',
                  /*Carousel auto-scrolling speed. 3000 = 3 seconds. If you want to disable auto-scroll, set this value to false.*/
                  enable_auto_scroll: 10000,
                },
                header:{
                  /*Show overall rating stars*/
                  enable_overall_stars: true,
                },
                reviews: {
                  /*Show customer name*/
                  enable_customer_name: true,
                  /*Show customer location*/
                  enable_customer_location: true,
                  /*Show "verified review" badge*/
                  enable_verified_badge: true,
                  /*Show "I recommend this product" badge (Only for product reviews)*/
                  enable_recommends_badge: true,
                  /*Show photos attached to reviews*/
                  enable_photos: true,
                  /*Show videos attached to reviews*/
                  enable_videos: true,
                  /*Show when review was written*/
                  enable_review_date: true,
                  /*Hide reviews written by the same customer (This may occur when customer reviews multiple products)*/
                  disable_same_customer: true,
                  /*Minimum star rating*/
                  min_review_percent: 4,
                  /*Show 3rd party review source*/
                  third_party_source: true,
                  /*Hide reviews without comments (still shows if review has a photo)*/
                  hide_empty_reviews: true,
                  /*Show product name*/
                  enable_product_name: true,
                  /*Show only reviews which have specific tags (multiple comma separated tags allowed)*/
                  tags: "",
                  /*Show branch, only one input*/
                  branch: "",
                  enable_branch_name: false,
                },
                popups: {
                  /*Make review items clickable (When they are clicked, a popup appears with more information about a customer and review)*/
                  enable_review_popups:  true,
                  /*Show "was this review helpful" buttons*/
                  enable_helpful_buttons: true,
                  /*Show how many times review was upvoted as helpful*/
                  enable_helpful_count: true,
                  /*Show share buttons*/
                  enable_share_buttons: true,
                },
              },
              styles:{
                /*Base font size is a reference size for all text elements. When base value gets changed, all TextHeading and TexBody elements get proportionally adjusted.*/
                '--base-font-size': '16px',
                '--base-maxwidth':'100%',
        
                /*Logo styles:*/
                '--reviewsio-logo-style':'var(--logo-inverted)',
        
                /*Star styles:*/
                '--common-star-color':'#5700aa',
                '--common-star-disabled-color':' rgba(0,0,0,0.25)',
                '--medium-star-size':'40',
                '--small-star-size':'22px', /*Modal*/
                '--x-small-star-size':'20px',
                '--x-small-star-display':'inline-flex',
        
                /*Header styles:*/
                '--header-order':'1',
                '--header-width':'300px',
                '--header-bg-start-color':'#F5A203',
                '--header-bg-end-color':'#ffb910',
                '--header-gradient-direction':'180deg',
                '--header-padding':'1.2em',
                '--header-border-width':'0px',
                '--header-border-color':'rgba(0,0,0,0.1)',
                '--header-border-radius':'25',
                '--header-shadow-size':'10px',
                '--header-shadow-color':'#00000026',
        
                /*Header content styles:*/
                '--header-star-color':'#fafafa',
                '--header-disabled-star-color':'#30303030',
                '--header-heading-text-color':'#fafafa',
                '--header-heading-font-size':'24',
                '--header-heading-font-weight':'600',
                '--header-heading-line-height':'2',
                '--header-heading-text-transform':'uppercase',
                '--header-subheading-text-color':'#fafafa',
                '--header-subheading-font-size':'18',
                '--header-subheading-font-weight':'100',
                '--header-subheading-line-height':'1.4',
                '--header-subheading-text-transform':'capitalize',
        
                /*Review item styles:*/
                '--item-maximum-columns':'5',/*Must be 3 or larger*/
                '--item-background-start-color':'#fafafa',
                '--item-background-end-color':'#f5f5f5',
                '--item-gradient-direction':'180deg',
                '--item-padding':'1.5em',
                '--item-border-width':'0px',
                '--item-border-color':'rgba(0,0,0,0.1)',
                '--item-border-radius':'25',
                '--item-shadow-size':'10px',
                '--item-shadow-color':'rgba(0,0,0,0.15)',
        
                /*Heading styles:*/
                '--heading-text-color':'#303030',
                '--heading-text-font-weight':'400',
                '--heading-text-font-family':'Gilroy-Bold',
                '--heading-text-line-height':' 1.4',
                '--heading-text-letter-spacing':'0.5px',
                '--heading-text-transform':'none',
        
                /*Body text styles:*/
                '--body-text-color':'#303030',
                '--body-text-font-weight':'400',
                '--body-text-font-family':'Gilroy-Regular',
                '--body-text-line-height':' 1.4',
                '--body-text-letter-spacing':'0.1px',
                '--body-text-transform':'none',
        
                /*Scroll button styles:*/
                '--scroll-button-icon-color':'303030',
                '--scroll-button-icon-size':'24px',
                '--scroll-button-bg-color':'transparent',
        
                '--scroll-button-border-width':'0px',
                '--scroll-button-border-color':'rgba(0,0,0,0.1)',
        
                '--scroll-button-border-radius':'60px',
                '--scroll-button-shadow-size':'0px',
                '--scroll-button-shadow-color':'rgba(0,0,0,0.1)',
                '--scroll-button-horizontal-position':'3px',
                '--scroll-button-vertical-position':'0',
        
                /*Badge styles:*/
                '--badge-icon-color':'#F5A203',
                '--badge-icon-font-size':'20',
                '--badge-text-color':'#F5A203',
                '--badge-text-font-size':'10',
                '--badge-text-letter-spacing':'0.2',
                '--badge-text-transform':'uppercase',
        
                /*Author styles:*/
                '--author-font-size':'20',
                '--author-font-weight':'800',
                '--author-text-transform':'capitalize',
        
                /*Product photo or review photo styles:*/
                '--photo-video-thumbnail-size':'60',
                '--photo-video-thumbnail-border-radius':'10',
        
                /*Popup styles:*/
                '--popup-backdrop-color':'#3030307D',
                '--popup-color':'#FAFAFA',
                '--popup-star-color':'5700aa',
                '--popup-disabled-star-color':'inherit',
                '--popup-heading-text-color':'303030',
                '--popup-body-text-color':'303030',
                '--popup-badge-icon-color':'inherit',
                '--popup-badge-icon-font-size':'19px',
                '--popup-badge-text-color':'inherit',
                '--popup-badge-text-font-size':'14px',
                '--popup-border-width':'0px',
                '--popup-border-color':'rgba(0,0,0,0.1)',
                '--popup-border-radius':'25',
                '--popup-shadow-size':'10',
                '--popup-shadow-color':'#00000026',
                '--popup-icon-color':'#5700AA',
        
                /*Tooltip styles:*/
                '--tooltip-bg-color':'#0E1311',
                '--tooltip-text-color':'#ffffff',
              },
          translations:{
                  rating: "rating",
                  reviews: "reviews",
                  excellent: "excelente",
                  good: "bueno",
                  normal: "normal",
                  anonymous: "anónimo",
                  verified_customer: "comprador verificado",
                  based_on: "basado en",
                  would_recommend: "recomendable",
                  helpful_multiple: "me fueron útiles",
                  helpful_single: "me fue útil",
                  up_voted: "Fue útil",
                  down_voted: 'No fue útil.',
                  was_helpful: 'Fue útil',
                  yes:'si',
                  no:'no',
                  minute_ago:'minuto atrás',
                  minutes_ago:'minutos atrás',
                  hour_ago:'hora atrás',
                  hours_ago:'horas atrás',
                  day_ago:'día atras',
                  days_ago:'días atras',
                  week_ago:'semana atrás',
                  weeks_ago:'semanas atrás',
                  month_ago:'mes atrás',
                  months_ago:'meses atrás'
                }
            });`;
        document.body.appendChild(scriptColchones);
      })
      .catch((error) => {
        console.error("Error al cargar el script:", error);
      });

    return () => {
      const scriptColchones = document.querySelector(
        'script[data-widget="reviewsio-carousel-widget"]'
      );
      const divColchones = document.querySelector('.CarouselWidget-prefix');
      scriptColchones && document.body.removeChild(scriptColchones);
      divColchones && document.body.removeChild(divColchones);
      deleteScript && document.head.removeChild(deleteScript);
    };
  }, []);

  return (
    <Container>
        <Helmet>
            <link
            rel="stylesheet"
            href="https://assets.reviews.io/css/widgets/carousel-widget.css?_t=2021072217"
            />
            <link
            rel="stylesheet"
            href="https://assets.reviews.io/iconfont/reviewsio-icons/style.css?_t=2021072217"
            />
        </Helmet>

          <Margin margin="30px 20px">
            {
              isHotsale ?
                <Titles
                titleTag="h4"
                color="yellowCalm"
                align="center"
                font="extraBold"
                fontSize="2.9rem"
                letterSpacing="-0.5px"
                responsiveMobile={{
                    fontSize:"1.4em"
                }}
                >
                  El colchón mejor puntuado<br/> de Argentina
              </Titles> : 

                <Titles
                titleTag="h2"
                color="yellowCalm"
                align="center"
                font="light"
                fontSize="1.9em"
                letterSpacing="-0.5px"
                responsiveMobile={{
                    fontSize:"1.4em"
                }}
                >
                  El colchón <Bold>mejor puntuado</Bold> de Argentina
              </Titles>
            }
        </Margin>

        <Margin margin="1rem 0 1rem 0">
            {
              isHotsale ?
              <Text
              color="black"
              font="medium"
              hasStrong
              fontSize="1.5em"
              align="center"
              responsiveMobile={{
                fontSize:".9rem"
              }}
              >
                No lo decimos nosotros, <b>lo dicen nuestros clientes</b>.<br/> <b>Opiniones reales</b> de clientes reales 100% verificadas.
              </Text> : 
              <Text
              color="black"
              font="extraBold"
              fontSize="1.2em"
              align="center"
              >
                 opiniones 100% verificadas.
              </Text>
            }
        </Margin>

        <div id="reviewsio-carousel-widget"></div>
        <ButtonReviews>
            <Button
            href="https://calmessimple.com.ar/opiniones-reales-de-clientes-reales/"
            backgroundColor="white"
            borderColor="yellowCalm"
            borderRadius="8px"
            size="medium"
            font="bold"
            fontSize="1.2em"
            textColor="yellowCalm"
            backgroundColorHover="yellowCalm"
            textColorHover="white"
            >
                ¡ver más opiniones!
            </Button>
        </ButtonReviews>
        
    </Container>
  );
};

export default ReviewsHome;
