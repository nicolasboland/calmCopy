import Titles from "@/components/Atoms/Typography/Titles";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Paragraph from "@/components/Atoms/Typography/Text";
import Images from "@/components/Atoms/Images/Images";
import { IProps } from "./types";
import { Container, Wraper, WraperInfo, WraperImages } from "./styled";
const EstructuraBases = ({estructuraInfo, estructuraImagen, title} : IProps) => {
    return (
        <Container>
            <Margin margin="35px 0 0 0" marginMobile="20px 0">
                <Titles
                font="regular"
                titleTag="h3"
                fontSize="1.7em"
                align="center"
                responsiveMobile={{
                    fontSize:"1.4rem"
                }}
                boldTitle={title}
                >Estructura de tu </Titles>
            </Margin>
            <Wraper>
                <WraperInfo>
                    {estructuraInfo.map((item, index) => 
                        <div key={index}>
                            <Margin
                                margin="0 0 2em 0"
                            >
                                {<Titles
                                titleTag="h4"
                                font="bold"
                                fontSize="1.3rem"
                                >
                                    {item.title}
                                </Titles>}
                            </Margin>
                            <Margin
                                margin="0 0 2em 0"
                            >
                                <Paragraph
                                    fontSize="1.1rem"
                                >
                                    {item.description}
                                </Paragraph>
                            </Margin>
                        </div>
                    )}
                </WraperInfo>
                <WraperImages>
                    <Images
                        src={estructuraImagen}
                        alt="imagen"
                        isLazy
                    >

                    </Images>
                </WraperImages>
            </Wraper>
        </Container>
    )
}

export default EstructuraBases;