import EDE from "@/components/Organisms/EDE/EDE"
import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions"
import PasosEDE from "@/components/Organisms/PasosEDE/PasosEDE"
import {IProps} from "./types"
const EntregaDeEnsueno = ({title, items, boldTitle} : IProps) => {
    return(
        <>
            <EDE/>
            <PasosEDE />
            <FrequentQuestions title={title} items={items} boldTitle={boldTitle}/>
        </>
    )
}
export default EntregaDeEnsueno