import Titles from "@/components/Atoms/Typography/Titles";
import Separator from "@/components/Atoms/Separator/Separator"
import { Container } from "./styled"
import NivelFirmeza from "@/components/Molecules/NivelFirmeza/NivelFirmeza";
import { IProps } from "./types"

const FirmezaColchonCategory = ({title, original, hibrido}: IProps) => {
    return (
        <div>
            <Titles
            titleTag="h4"
            font="bold"
            fontSize="1.5rem"
            align="center"
            >
                {title}
            </Titles>

            <Separator />

            <Container>
                <NivelFirmeza
                image={original.image}
                nivel={original.nivel}
                />

                <NivelFirmeza
                image={hibrido.image}
                nivel={hibrido.nivel}
                />
            </Container>
        </div>
    )
}

export default FirmezaColchonCategory;