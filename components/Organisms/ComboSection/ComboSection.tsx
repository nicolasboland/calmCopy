import { Wrapper, LandingContent } from "./styled";
import TitleDescriptionAndMedia from "@/components/Molecules/TitleDescriptionAndMedia/TitleDescriptionAndMedia"

const ComboSection = () => {
    return (
        <LandingContent>
            <Wrapper>
                <TitleDescriptionAndMedia
                    image={{
                        src:"https://calmessimple.com.ar/wp-content/uploads/2022/12/combo_colchon.webp",
                        alt:"colchon"
                    }}    
                    text={{
                        boldTitle: "El colchón mejor puntuado de Argentina.",
                        text: "Creemos que para encontrar tu colchón ideal necesitas más que 5 minutos en un local. Por eso tenes 30 noches de prueba ¡en tu casa!"   
                    }}
                    isCombo
                />
                <TitleDescriptionAndMedia
                    imageRight={{
                        src:"https://calmessimple.com.ar/wp-content/uploads/2022/12/combo_original.webp",
                        alt:"colchonYBase"
                    }}    
                    text={{
                        boldTitle: "La base que viene en caja.",
                        text: "Pusimos especial foco en este punto y estamos orgullosos de lo fácil que es. En tan solo 15 minutos tenes lista tu nueva base."   
                    }}
                    isCombo
                />
                <TitleDescriptionAndMedia
                    image={{
                        src:"https://calmessimple.com.ar/wp-content/uploads/2022/12/combo_pareja.webp",
                        alt:"colchon"
                    }}    
                    text={{
                        boldTitle: "Compralos juntos y ahorrá en tu descanso soñado.",
                        text: "Recibí tu colchón y base de hierro juntos y en caja, subilos por ascensor o escalera y disfrutá del mejor descanso."   
                    }}
                    isCombo
                />
            </Wrapper>
        </LandingContent>
      );
}

export default ComboSection