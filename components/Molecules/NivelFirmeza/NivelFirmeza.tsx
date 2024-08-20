import Images from "@/components/Atoms/Images/Images";
import Bar from "@/components/Atoms/Bar/Bar"
import { IProps }  from "./types"
import { Container } from "./styled"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Titles from "@/components/Atoms/Typography/Titles";

const NivelFirmeza = ({image, nivel}: IProps) => {
    return (
    <Container>
        <Images src={image} alt="capas" />

        <Margin margin="15px 0" marginMobile="5px 0">
            <Titles
            font="medium"
            fontSize="1.1rem"
            color="lead"
            responsiveMobile={{
                fontSize:".9rem"
            }}
            >
                Nivel de firmeza
            </Titles>
        </Margin>

        <Bar cantidad={nivel} height="14px"/>
    </Container>
    )
}

export default NivelFirmeza;