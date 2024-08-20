export interface IProps {
    title: string;
    boldTitle: string;
    items: IAccordionItem[];
}
export interface IAccordionItem {
    title: string
    description: string
    is30night?:boolean
}