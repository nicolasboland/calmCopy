import BigBannerHotSale from "@/components/Organisms/BigBannerHotSale/BigBannerHotSale";
import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions";
import HotSaleFrequentQuestions from "@/jsons/FrequentQuestions/HotSale.json"
import ReviewsHome from "@/components/Organisms/ReviewsHome/ReviewsHome";
import helpJson from "@/utils/helpComponent.json"
import InfoCards from "@/components/Organisms/InfoCards/InfoCards"
import ButtonSection from "@/components/Organisms/ButtonSection/ButtonSection"
import BuyExperience from "@/components/Organisms/BuyExperience/BuyExperience";
import CategoryHome from "@/components/Organisms/CategoryHome/CategoryHome";

const HotSale = () => {
    
    return(
        <>
        <BigBannerHotSale/>
        <BuyExperience/>
        <ReviewsHome isHotsale/>
        <CategoryHome />
        <FrequentQuestions items={HotSaleFrequentQuestions} title="" boldTitle="Más info sobre Hot Sale 2024"/>
        <InfoCards
            title="Resultados Hot Sale 2023"
            cards={helpJson.hotSale}
            isHotSale
        />
        <ButtonSection 
        imageDesktop="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e34e85a4-c7cd-46a9-a5ab-4d553895c900/fit=cover" 
        imageMobile="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/aa2fd79f-a040-4f73-09a6-ab604d1b3100/fit=cover" 
        middleButton={true}
        isHotsale
        />
        </>
    )
}
export default HotSale;