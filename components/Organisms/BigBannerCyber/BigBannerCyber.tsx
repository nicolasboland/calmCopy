import { Container,
    Information,
    DescriptionInput
} from "./styled"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import MailChimpForm from "@/components/Molecules/MailchimpForm/MailchimpForm";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const BigBannerCyber = () => {
    return (
        <Container>
            <Information>
            <Titles
            color="white"
            font="bold"
            fontSize="3.4em"
            lineHeight="1em"
            letterSpacing="-1px"
            responsiveMobile={{
                align:"center",
                fontSize:"2.1em"
            }}
            >
                Ya llega Cyber Monday
                el descuento más grande del año
            </Titles>

            <DescriptionInput>
                <Text
                fontSize="1.2em"
                color="white"
                responsiveMobile={{
                    fontSize:"1rem"
                }}
                >
                    <b>suscribite y enterate</b> antes que nadie del descuento que tenemos para vos:

                </Text>

                <MailChimpForm tag="pre_cyber_2024" />

                <Margin margin=".4rem"/>

            </DescriptionInput>
            </Information>
        </Container>
    )
}

export default BigBannerCyber;
