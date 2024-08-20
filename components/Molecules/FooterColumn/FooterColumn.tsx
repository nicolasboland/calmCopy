import {
    StyledContainerColumn
} from "./styled";

import { IProps } from "./types";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const FooterColumn = ({ items, title }: IProps) => {
    return (
        <>
            <StyledContainerColumn $hasTitle={title}>
            <Margin margin="0 0 15px 0" >
                <Titles
                    titleTag="h3"
                    color="offBlack"
                    font="bold"
                    fontSize="1.25rem">{title}</Titles>
                    </Margin>
                {items.map(({ header, links, headerHref }, index) => {
                    return (
                        <div key={index}>
                            <Text
                                textTag="a"
                                link={headerHref}
                                color="millionGray"
                                font="extraBold"
                                fontSize="0.8rem">{header}</Text>
                            {links.map(({ text, href }: {text: string, href: string}, index: number) => {
                                return (
                                    <div key={index}>
                                        <Text
                                            textTag="a"
                                            link={href}
                                            fontSize="0.8rem"
                                            textDecoration="none"
                                            color="millionGray">
                                        {text}
                                        </Text>
                                        <br /></div>
                                )
                            })}
                        </div>
                    )
                })}
            </StyledContainerColumn>
        </>
    )
}

export default FooterColumn;