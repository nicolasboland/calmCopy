import { Container, ContainerText, ContainerCards, Select, ContainerCardsMobile } from "./styled";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import ComparacionCard from "@/components/Molecules/ComparacionCard/ComparacionCard";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { IProps } from "./types"
import { useState } from "react";
import parse from 'html-react-parser';
import Quizz from '@/components/Molecules/Quizz/Quizz';
import Button from "@/components/Atoms/Buttons/Button";

const ComparitionMultiple = ({info, productId} : IProps) => {
    const [ firstSelect, setFirstSelect] = useState(0)
    const [quizzActive, setQuizzActive] = useState(false)
    const isThreeItems = info.cards.length > 2
    const isFourItems = info.cards.length > 3
    
    const quizzHandle = () => {
      setQuizzActive(!quizzActive)
    }

    return (
        <Container $isThreeItems={isThreeItems}>
            <ContainerText $isThreeItems={isThreeItems}>
                <Titles
                titleTag="h5"
                font="bold"
                fontSize="2.1rem"
                lineHeight="110%"
                align={isThreeItems ? "center" : "left"}
                responsiveMobile={{
                    fontSize:"1.5rem",
                    align:"center"
                }}
                >
                    {info.title}
                </Titles>

               {
                info.quizzLink !== "" &&  
                <>
                    <Margin margin=".5rem"/>

                    <Text
                    font="medium"
                    fontSize="1.1rem"
                    align={isThreeItems ? "center" : "left"}
                    hasStrong
                    responsiveMobile={{
                        align:"center",
                        fontSize:"1rem",
                        width:"90%"
                    }}
                    >{parse(info.description)}</Text>

                    <Margin margin=".5rem"/>

                    <Margin margin="0 auto 20px auto" marginMobile="0 auto 20px auto">
                        <Button
                            size="none"
                            height="50px"
                            width="300px"
                            borderRadius="598.211px"
                            borderColor="black"
                            backgroundColorHover="black"
                            textColorHover="white"
                            onClick={quizzHandle}
                        >
                            <Text
                            font="medium"
                            responsiveMobile={{
                                fontSize: ".7rem",
                            }}
                            >
                            Responder
                            </Text>
                        </Button>
                    </Margin>
                </>
                } 
               {
                quizzActive && 
                <Quizz quizzActive={quizzActive} closeHandle={quizzHandle} quizzKey={info.quizzLink}/>
               }

            </ContainerText>

            <ContainerCards $isThreeItems={isThreeItems}>
                {
                info.cards.map((card, index) => {
                    return (
                        <ComparacionCard 
                        key={index}
                        id={card.id}
                        isSelected={productId === info.cards[index].id}
                        title={card.title}
                        textButton={card.textButton}
                        img={card.img}
                        isFourItems={isFourItems}
                        firmeza={card.firmeza}
                        description={card.description}
                        Respirabilidad={card.Respirabilidad}
                        specs={card.specs}
                        />
                    )
                })
                }
            </ContainerCards>
            <ContainerCardsMobile>
                <Select 
                onChange={(event) => {
                    const selectedIndex = info.cards.findIndex(card => card.title === event.target.value);
                    setFirstSelect(selectedIndex);
                }}
                value={info.cards[firstSelect]?.title} 
                >
                    {
                        info.cards.map((card, index) => {
                            return (
                                <option 
                                key={index}
                                value={card.title} 
                                disabled={index === firstSelect}
                                >
                                        {card.title}
                                </option>
                            )
                        })
                    }
                </Select>
                {
                info.cards.map((card, index) => {
                    return (
                        index === firstSelect &&
                        <ComparacionCard 
                        key={index}
                        id={card.id}
                        isSelected={productId === info.cards[index].id}
                        title={card.title}
                        textButton={card.textButton}
                        img={card.img}
                        firmeza={card.firmeza}
                        isFourItems={isFourItems}
                        Respirabilidad={card.Respirabilidad}
                        description={card.description}
                        specs={card.specs}
                        />
                    )
                })
                }
            </ContainerCardsMobile>
        </Container>
      );
}

export default ComparitionMultiple