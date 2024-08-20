import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions";
import CyberFrequentQuestions from "@/jsons/FrequentQuestions/Cyber.json"
import ReviewsHome from "@/components/Organisms/ReviewsHome/ReviewsHome";
import helpJson from "@/utils/helpComponent.json"
import InfoCards from "@/components/Organisms/InfoCards/InfoCards"
import ButtonSection from "@/components/Organisms/ButtonSection/ButtonSection"
import BuyExperience from "@/components/Organisms/BuyExperience/BuyExperience";
import CategoryHome from "@/components/Organisms/CategoryHome/CategoryHome";
import BigBannerCyber from "@/components/Organisms/BigBannerCyber/BigBannerCyber";

const CyberLanding = () => {
    
    return(
        <>
        <BigBannerCyber/>
        <BuyExperience/>
        <ReviewsHome isHotsale/>
        <CategoryHome />
        <FrequentQuestions items={CyberFrequentQuestions} title="" boldTitle="Más info sobre Cyber Monday 2024"/>
        <InfoCards
            title="Resultados Cyber Monday 2023"
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
export default CyberLanding;