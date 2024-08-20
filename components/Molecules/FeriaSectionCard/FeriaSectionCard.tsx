import { ItemWrapper, Circle } from "./styled"
import { IProps } from "./types" 
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"

export const FeriaSectionCard = ({title, subTitle}: IProps) => {
    return (
        <ItemWrapper>
            <Circle />
            <Titles
            titleTag="h4"
            font="extraBold"
            fontSize="1.5em"
            color="offBlack"
            align="center"
            >
                {title}
            </Titles>

            <Margin margin="1em 0 .5em">
                <Text
                font="regular"
                fontSize="1em"
                hasStrong
                align="center"
                >
                    {subTitle}
                </Text>
            </Margin>
        </ItemWrapper>
    )
}
