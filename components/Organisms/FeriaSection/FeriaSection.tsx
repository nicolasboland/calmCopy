import { Content, Items, Wrapper } from "./styled";
import { FeriaSectionCard } from "@/components/Molecules/FeriaSectionCard/FeriaSectionCard";
import FeriaSectionContent from "@/jsons/FeriaSectionContent.json"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Text from "@/components/Atoms/Typography/Text";

const FeriaSection = ({showDonation}: {showDonation?: boolean}) => {
    return (
        <Content>
                <Wrapper>
                    <Items>
                       {
                        FeriaSectionContent.map((item, index) => (
                            <FeriaSectionCard
                            key={index}
                            title={item.title}
                            subTitle={item.Subtitle}
                            />
                        ))
                       }
                    </Items>

                    <Margin margin="0 0 1rem 0"/>
                    
                    { showDonation && 
                        <>
                            <Text
                            font="regular"
                            fontSize="1em"
                            align="center"
                            hasStrong
                            >
                                A la vez, nos ayudas a conservar los recursos y hacer que el mundo sea <b>un poco más verde</b>.
                                Y para darle el cierre que se merece, podes 
                                <Text 
                                color="wildViolet" 
                                textTag="span"
                                font="bold"
                                > 
                                    {" "}donarnos tu ex colchón {" "}
                                </Text>
                                al mismo tiempo que te entregamos el nuevo.
                            </Text>
                        </>
                    }
                </Wrapper>
        </Content>
      );
}

export default FeriaSection