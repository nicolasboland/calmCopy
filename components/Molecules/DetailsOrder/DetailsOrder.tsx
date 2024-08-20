import { Container, DetilsTitle } from "./styled"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import parse from 'html-react-parser';
import { IProps } from "./types"

const DetailsOrder = ({text}: IProps) => {
    return (
        <Container>
            <Titles
            titleTag="h3"
            font="medium"
            fontSize="1.2rem"
            >
                Detalles del pedido
            </Titles>

            <Text>
            {parse(text)}
            </Text>
        </Container>
    )
}

export default DetailsOrder;