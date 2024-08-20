export interface IProps {
    specsTitle?: string
    specsBoldTitle?: string
    imageUrl?: string;
    specs?: {
        name: string,
        size: string,
        description?: string
    }[];
    generalSpecsDescription?: string
}