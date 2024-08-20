import {
    Socials,
    SocialDiv,
} from "./styled";
import Text from "@/components/Atoms/Typography/Text"
import Images from "@/components/Atoms/Images/Images";

const SocialImages = () => {
    return(
        <Socials>
                <SocialDiv>
                    <Text textTag="a" link='https://www.instagram.com/calm.es.simple/' target='_blank' rel='noreferrer' >
                        <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/0be970af-f08c-4c5d-5347-bc8cae372c00/fit=cover" alt="instagram" width="18px" isLazy/>
                    </Text>
                </SocialDiv>
                <SocialDiv>
                    <Text textTag="a" link='https://www.facebook.com/Calm-es-simple-103322771084627' target='_blank' rel='noreferrer'>
                        <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e6a00f04-32d7-46b5-1b6a-e411a75c9800/fit=cover" alt="facebook" width="18px" isLazy/>
                    </Text>
                </SocialDiv>
                <SocialDiv>
                    <Text textTag="a" link='https://www.youtube.com/channel/UCm0coGiJraahBGxuxycDb0g' target='_blank' rel='noreferrer'>
                        <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/cd34494d-a759-4ad0-2e31-0635dcfb7d00/fit=cover" alt="youtube" width="18px" isLazy/>
                    </Text>
                </SocialDiv>
                <SocialDiv>
                    <Text textTag="a" link='https://www.tiktok.com/@calm.es.simple' target='_blank' rel='noreferrer'>
                        <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/75d0c56c-d4db-4c58-d4d5-3326530d2600/fit=cover" alt="tiktok" width="18px" isLazy/>
                    </Text>
                </SocialDiv>
                <SocialDiv>
                    <Text textTag="a" link='https://twitter.com/calm_essimple' target='_blank' rel='noreferrer'>
                        <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7ca18fd-cc8f-44c6-50e5-9df4b74f3300/fit=cover" alt="twitter" width="15px" isLazy/>
                    </Text>
                </SocialDiv>
                <SocialDiv>
                    <Text textTag="a" link='https://www.linkedin.com/company/calmessimple/' target='_blank' rel='noreferrer'>
                        <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8a4a9a61-67bf-4ce0-52dd-1dc252319a00/fit=cover" alt="linkedin" width="18px" isLazy/>
                    </Text>
                </SocialDiv>
            </Socials>
    )
}
export default SocialImages