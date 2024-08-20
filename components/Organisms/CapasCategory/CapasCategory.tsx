import { ContainerCapas } from "./styled"
import InfoCapasCategory from "@/components/Molecules/InfoCapasCategory/InfoCapasCategory"
import Titles from "@/components/Atoms/Typography/Titles"
import Separator from "@/components/Atoms/Separator/Separator"
import { IProps } from "./types"

const CapasCategory = ({title, original, hibrido}: IProps) => {
    
    return (
    <>
        <Titles
        titleTag="h4"
        font="bold"
        fontSize="1.5rem"
        align="center"
        >
            {title}
        </Titles>

        <Separator />

        <ContainerCapas>
            <InfoCapasCategory
                arrCapas={original.arrCapas}
                specs={original.specs}
                isOriginal={true}
            />

            <InfoCapasCategory
                arrCapas={hibrido.arrCapas}
                specs={hibrido.specs}
            />
        </ContainerCapas>
    </>
  
    )
}

export default CapasCategory