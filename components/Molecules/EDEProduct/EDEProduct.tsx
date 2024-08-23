import { Container, TextContainer, Input } from "./styles"
import { IProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import { ModalInformation, ModalInformationIcon } from "@/components/Organisms/Modals/ModalInformation/ModalInformation"
import Modal from "@/components/Organisms/Modals/Modal"

const EDEProduct = ({
    onClick,
    priceEDE
}: IProps) => {
    return (
    <Container>
        <Input type="checkbox" onClick={onClick}/>

        <TextContainer>
            <Text
            font="medium"
            >
                Entrega de ensueño
            </Text>

            <Text
            color="millionGray"
            fontSize=".85rem"
            >
                Armamos nuestros productos en tu casa
            </Text>
            
            <Text
            font="medium"
            >
                + ${priceEDE}
            </Text> 
    
        </TextContainer>

        <Modal>
            <ModalInformationIcon showText/>
            <ModalInformation />
        </Modal>
    </Container>
    )
}

export default EDEProduct