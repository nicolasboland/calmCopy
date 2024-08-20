
import Input from "@/components/Atoms/Input/Input";
import { Category, SelectedCategory, DivTab } from "./styled";
import { TabProps } from "./types";


const Tab = ({ sku, name, tabHandle } : TabProps) => {

  return (
    <DivTab >
       <Category type="radio" name="Tabs" id={name}  onChange={(e) => tabHandle(e)} defaultChecked={sku === "tab-colchones"}/>
      <SelectedCategory htmlFor={name}>{name}</SelectedCategory>
    </DivTab>
  );
};

export default Tab;
