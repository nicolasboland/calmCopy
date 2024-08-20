import Indications from "@/components/Molecules/Indications/Indications";
import { DivDirections } from "./styled";
import MapLocalm from "@/components/Molecules/MapLocalm/MapLocalm";
const Directions = () => {

    return (
        <DivDirections>
            <Indications />
            <MapLocalm />
        </DivDirections>
    )
}

export default Directions