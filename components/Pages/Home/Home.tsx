import PaymentMethods from "@/components/Organisms/PaymentMethods/PaymentMethods";
import {IProps} from "./types"
import BigBanner from "@/components/Organisms/BigBanner/BigBanner";
import ShoppingExperience from "@/components/Organisms/ShoppingExperience/ShoppingExperience";
import CategoryHome from "@/components/Organisms/CategoryHome/CategoryHome";
import RelatedProducts from "@/components/Organisms/RelatedProducts/RelatedProducts";
import DonateHome from "@/components/Organisms/DonateHome/DonateHome";
import ReviewsHome from "@/components/Organisms/ReviewsHome/ReviewsHome";
import PricesAndProducts from "@/components/Organisms/PricesAndProducts/PricesAndProducts";
import NightTrial from "@/components/Organisms/30NightTrial/NightTrial";
import CalmInfoHome from "@/components/Organisms/CalmInfoHome/CalmInfoHome";
import TagShipment from "@/components/Organisms/TagShipment/TagShipment";
import { ThreeBlockText } from "@/components/Molecules/ThreeBlockText/ThreeBlockText"
import items from "@/utils/DropDownMobileText.json"
import bigBannerNoPromo from "@/utils/bigBannerNoPromo.json"
import { SkeletonLoader } from "@/components/Molecules/SkeletonLoader/SkeletonLoader"
import { useEffect, useState } from "react";
import { preloadImages } from "@/utils/preloadImage"
import Spinner from "@/components/Atoms/Spinner/Spinner";
import { IPlainImageSlide } from "@/state/hygraph/types";
import { isThursday } from "@/utils/GaliciaPromo"
import { getBigBanners } from "@/state/hygraph/hygraphSelector";
import { useSelector } from "react-redux"
import { onGetBigBanners } from "@/state/hygraph/hygraphActions";
import { useDispatch } from "react-redux"
import GaliciaPromo from "@/utils/bigBannerGaliciaPromo.json"
import { onRedirectLoadingFinished } from "@/state/loading/loadingActions";

const HomePage = ({bigBannerData, currentProductsRelated, colchon} : IProps) => {
  const dispatch = useDispatch()

  let isDefaultSelected = false;
  const [selectedBigBanner, setSelectedBigBanner] = useState<IPlainImageSlide[] | undefined>()
  const [isBigbannerLoaded, setIsBigbannerLoaded] = useState<boolean>(false)
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState<boolean>(false)

  
  useEffect(() => {
    if (bigBannerData) {
        preloadImages(bigBannerData[0].imagenDesktop).then(() => {
          setIsFirstImageLoaded(true)
        });
    }
  }, [bigBannerData])

  const isGaliciaThursday = (arrBigBanners: IPlainImageSlide[]) => {
    let arr = [...arrBigBanners];
    if (isThursday()) {
      arr.splice(1, 0, GaliciaPromo);
    }
    return arr
  } 

  const isBannerDataIncomplete = (bannerData: IPlainImageSlide[]) => {
    return (
      bannerData[0].titulo === "" || 
      bannerData[0].imagenMobile === "" || 
      bannerData[0].imagenDesktop === ""
    );
  };
  

  const selectedBigBannerData = () => {
    if (bigBannerData && !isBannerDataIncomplete(bigBannerData)) {
      const arrBigBanners: IPlainImageSlide[] = isGaliciaThursday(bigBannerData)
      return arrBigBanners
    }
    isDefaultSelected = true;
    isGaliciaThursday(bigBannerNoPromo)
    return bigBannerNoPromo
  };

  useEffect(() => {
    if (bigBannerData) {
      setSelectedBigBanner(selectedBigBannerData())
    }
  }, [bigBannerData])

  useEffect(() => {
    if (selectedBigBanner) {
      if (selectedBigBanner && selectedBigBanner.length > 1) {
        let images: string[] = []
        selectedBigBanner.forEach(banner => {
          images.push(banner.imagenMobile)
          images.push(banner.imagenDesktop)
        });
        preloadImages(images).then(() => {
          setIsBigbannerLoaded(true)
        });
      } else if (selectedBigBanner && selectedBigBanner.length == 1) {
        if (selectedBigBanner[0].imagenMobile && selectedBigBanner[0].imagenDesktop) {
          const images = [selectedBigBanner[0].imagenMobile, selectedBigBanner[0].imagenDesktop]
          preloadImages(images).then(() => {
            setIsBigbannerLoaded(true)
          });
        }
      }
    }
  }, [selectedBigBanner])

  useEffect(() => {
    if (isBigbannerLoaded) {
      dispatch(onRedirectLoadingFinished())
    }
  }, [isBigbannerLoaded])

    return(
        <>
        {
         !isFirstImageLoaded && 
         <SkeletonLoader  width="100%" height="450px" borderRadius="10px" responsiveMobile={{ height:"600px"}}/>
        }

          <BigBanner 
          bigBanner={selectedBigBanner} 
          isDefault={isDefaultSelected} 
          isImagesLoaded={isBigbannerLoaded} 
          preloadImageDesktop={bigBannerData ? bigBannerData[0].imagenDesktop : ""}
          preloadImageMobile={bigBannerData ? bigBannerData[0].imagenMobile : ""}
          isFirstImageLoaded={isFirstImageLoaded}
          />

           <TagShipment />
            <PaymentMethods />
            <ShoppingExperience />
            <CategoryHome />
            <ThreeBlockText
              info={items}
              isHome
              hasAccordion
              isOrange
              title={{
                color:"darkerYellowCalm",
                hasTitle: true,
                font:"light",
                boldTitle:"simple.",
                fontSize:"2em",
                title: "calm es"
              }}
            />
            {colchon && <PricesAndProducts colchon={colchon} />}
            <RelatedProducts relatedItems={currentProductsRelated} title="Completá tu descanso" boldTitle="ideal"/>
            <DonateHome />
            <ReviewsHome />
            <NightTrial />
            <CalmInfoHome />
        </>
    )
}
export default HomePage;