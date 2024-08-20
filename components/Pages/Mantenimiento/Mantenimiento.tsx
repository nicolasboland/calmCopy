import Images from "@/components/Atoms/Images/Images";
import { Wrapper } from "./styled";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";


const Mantenimiento = () => {
    return (
        <Wrapper>
            <Images 
            src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/4cb0a97b-bb21-4f58-a83e-60eeea837e00/fit=cover"
            alt="logo_calm"
            width="100px"/>
            <Titles
                font="extraBold"
                color="fadingHorizon"
                align="center"
                fontSize="1.9em"
            >
            Estamos en mantenimiento...
                </Titles>   
            <Text
            align="center"
            font="bold"
            color="fadingHorizon"
            fontSize="1.5em"
            >
            Intentá más tarde💛
            </Text>
        </Wrapper>
    );
};

export default Mantenimiento;