import TitleSubtitleButton from "@/components/Molecules/TitleSubtitleButton/TitleSubtitleButton"
import {
    ContainerRuedaCalm,
    ContainerTextRuedaCalm
} from "./styled"
import Text from "@/components/Atoms/Typography/Text"
import Titles from "@/components/Atoms/Typography/Titles"


const RuedaCalma = () => {
    return(
        <ContainerRuedaCalm>
            <ContainerTextRuedaCalm>
                <Titles
                    fontSize="1rem"
                    font="bold"
                    color="dullViolet"
                    responsiveMobile={{
                        fontSize:"0.5rem"
                    }}
                >RUEDA DE LA CALMA</Titles>
                <TitleSubtitleButton 
                title={{
                    titleTag: "h2",
                    text:'Te damos la bienvenida',
                    font:"bold",
                    fontSize:"1.7em",
                    color:"carbon",
                    responsiveMobile:{
                        fontSize: "1.3rem"
                    }    
                }}
                subtitle={{
                    text: (<>{`Ya puedes formar parte de nuestro programa de referidos. `} <br/>
                    <b>{`¡Ganá platita y regala almohadas!`}</b>
                    {` Expandiendo la calma.`}</>),
                    fontSize: "1rem",
                    font: "regular",
                    color: "carbon"
                }}
                button={{
                    text: "Comenzar a reclutar",
                    size: "small",
                    textColor:"white",
                    backgroundColor: "dullViolet",
                    font: "bold",
                }}
                margin="12px"
                />
            </ContainerTextRuedaCalm>
        </ContainerRuedaCalm>
)}
export default RuedaCalma