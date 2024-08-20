import variations_sizes from "@/utils/variations_sizes"
import { ContainerSize } from "./styled"
import { IPropsSize } from "./types"
import SizeCard from "../SizeCard/SizeCard"

const SelectorSize = ({
  arrChildren,
  selected,
  setSelected,
  setIsSizeChange,
  valToSearch,
  landing,
  hasRenders,
  isCategory,
}: IPropsSize) => {

  return (
    <ContainerSize>
      {arrChildren?.map((child) => (
          <SizeCard 
          key={child.id}
          childId={child.id}
          landing={landing}
          selected={selected}
          setSelected={setSelected}
          setIsSizeChange={setIsSizeChange}
          hasRenders={hasRenders}
          isCategory={isCategory}
          text={
            variations_sizes[
              child.attributes[
                valToSearch as keyof typeof child.attributes
              ] as keyof typeof variations_sizes
            ]
          }/>
      ))}
    </ContainerSize>
  )
}

export default SelectorSize