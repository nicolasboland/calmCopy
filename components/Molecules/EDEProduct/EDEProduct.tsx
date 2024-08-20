import { useDispatch, useSelector } from "react-redux";
import { Container, TextContainer, Input } from "./styles"
import { IProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import { useEffect, useState } from "react";
import { IStore } from "@/state/types";
import { getProductsData } from "@/state/products/productsSelector";
import { onGetProduct } from "@/state/products/productsActions";
import Spinner from "@/components/Atoms/Spinner/Spinner";
import { ModalInformation, ModalInformationIcon } from "@/components/Organisms/Modals/ModalInformation/ModalInformation"
import Modal from "@/components/Organisms/Modals/Modal"

const EDEProduct = ({
    onClick
}: IProps) => {
    const dispatch = useDispatch();
    const productsData = useSelector((state: IStore) => getProductsData(state));
    const [EDEPrice, setEDEPrice] = useState<number | undefined>()
  
    useEffect(() => {
      dispatch(onGetProduct("2024353"))
    }, [])

    useEffect(() => {
      setEDEPrice(productsData?.find(element => element.id === "2024353")?.price)
      
    }, [productsData])
    
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

            {
                EDEPrice ? 
                <Text
                font="medium"
                >
                    + ${EDEPrice}
                </Text> :
                <Spinner isBlack height="10px" width="10px"/>
            }
        </TextContainer>

        <Modal>
            <ModalInformationIcon showText/>
            <ModalInformation />
        </Modal>
    </Container>
    )
}

export default EDEProduct