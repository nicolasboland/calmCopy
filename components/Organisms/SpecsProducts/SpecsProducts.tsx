import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import { LandingContent } from "./styled";
import { 
        Container,
        ContainerDescription,
        ImageWrapper, 
        Row, 
        SectionContainer, 
        SpecsWrapper, 
        TableWrapper, 
        Wrapper
    } from "./styled";
import { IProps } from "./types";
import Images from "@/components/Atoms/Images/Images";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import parse from 'html-react-parser';

const SpecsProducts = ({
    imageUrl,
    specs,
    specsTitle,
    specsBoldTitle,
    generalSpecsDescription
}: IProps) => {
    return (
        <LandingContent>
            <Wrapper>
                <SectionContainer>
                    <Titles
                        titleTag="h3"
                        font="light"
                        fontSize="1.7em"
                        color="offBlack"
                        align="center"
                        boldTitle={specsBoldTitle}
                        responsiveMobile={{
                            fontSize:"1.4rem"
                        }}
                        >{specsTitle}</Titles>
                        <Margin margin="20px" />
                    <Container>
                        <SpecsWrapper>
                            <TableWrapper>
                                {specs && specs.map(spec => (
                                    <Row key={spec.name} $isSize>
                                        <Text
                                        textTag="span"
                                        font="extraBold"
                                        fontSize="1em"
                                        color="millionGray">{spec.name}</Text>
                                        <div>
                                       <Text
                                        textTag="span"
                                        font="regular"
                                        fontSize="1em"
                                        color="millionGray"
                                        responsiveMobile={{
                                            align:"right"
                                        }}>{spec.size}</Text>
                                        {
                                            spec.description && 
                                            <Text
                                            color="millionGray"
                                            font="regular"
                                            fontSize="0.7em">
                                                {spec.description}
                                            </Text>
                                        }</div>
                                    </Row>
                                ))}
                            </TableWrapper>
                        </SpecsWrapper>
                        <ImageWrapper>
                            {imageUrl && 
                            <Images 
                            borderRadius="10px"
                            src={imageUrl}
                            isLazy
                            alt="Spec Product"/>}
                            </ImageWrapper>
                    </Container>
                    {
                        generalSpecsDescription &&
                        <ContainerDescription>
                            <Text
                            textTag="p"
                            >{parse(generalSpecsDescription)}</Text>
                        </ContainerDescription>
                    }
                  
                </SectionContainer>
               
            </Wrapper>
        </LandingContent>
      );
}

export default SpecsProducts