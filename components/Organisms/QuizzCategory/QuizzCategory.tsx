import { IProps } from "./types"
import { Container,
    QuizzContainaer,
    QuizzImage
    } from "./styles"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Button from "@/components/Atoms/Buttons/Button"
import Images from "@/components/Atoms/Images/Images"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { useState } from "react"
import Quizz from '@/components/Molecules/Quizz/Quizz';

const QuizzCategory = ({infoQuizz} : IProps) => {
    const [quizzActive, setQuizzActive] = useState(false)
    
    const quizzHandle = () => {
        setQuizzActive(!quizzActive)
      }

    return (
        <Container>
            <QuizzContainaer>
                <Titles
                titleTag="h4"
                font="bold"
                fontSize="2.5rem"
                lineHeight="1"
                color="white"
                responsiveMobile={{
                    fontSize:"1.7rem",
                    align:"center"
                }}
                >
                    {infoQuizz.title}
                </Titles>

                <Margin margin="1rem" marginMobile=".7rem"/>
                
                <Text
                color="white"
                font="regular"
                fontSize="1rem"
                responsiveMobile={{
                    align:"center"
                }}
                >
                    {infoQuizz.description}
                </Text>

                <Margin margin="1rem" marginMobile=".9rem"/>

                <Button
                size="none"
                width="100%"
                height="50px"
                textColor="yellowCalm"
                textColorHover="white"
                font="bold"
                borderRadius="825.312px"
                backgroundColor="white"
                backgroundColorHover="dullViolet"
                onClick={quizzHandle}
                >
                    Responder
                </Button>
            </QuizzContainaer>


            <QuizzImage>
                <Images 
                src={infoQuizz.srcImage} 
                alt="quizzImage" 
                width="100%" 
                height="100%" 
                borderRadius="0 10px 10px 0" 
                responsiveMobile={{ 
                    borderRadius:"10px 10px 0 0"
                }}/>
            </QuizzImage>

            {
                quizzActive && 
                    <Quizz quizzActive={quizzActive} closeHandle={quizzHandle} quizzKey={infoQuizz.quizz}/>
            }
        </Container>
    )
}

export default QuizzCategory;