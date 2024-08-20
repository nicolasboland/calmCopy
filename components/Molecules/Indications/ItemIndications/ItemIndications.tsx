import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import { AddressContainer } from "./styled"
import {IProps} from "./types"



const ItemIndications = ({ direction, serviceHours, urlMap }: IProps) => {
    return (
        <AddressContainer>
            <Titles
                titleTag="h3"
                font="extraBold"
                fontSize="1.2rem"
                letterSpacing="0.5px"
                responsiveMobile={{
                    fontSize: "1.1rem"
                }}>{direction}</Titles>
            <Titles
                titleTag="h2"
                color="millionGray"
                font="light"
                fontSize="1.2em"
                letterSpacing="0.5px"
                responsiveMobile={{
                    fontSize: "1rem"
                }}>{serviceHours}</Titles>   
            <Text
                textTag="a"
                color="dullViolet"
                link={urlMap}
                target="blank">
                  Ver en Maps  
                </Text> 
        </AddressContainer>
    )
}

export default ItemIndications;