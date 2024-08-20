import { Container, TextMobile } from "./styled"
import Images from '@/components/Atoms/Images/Images';
import Margin from '@/components/Atoms/Spacing/Margin/Margin';
import Text from '@/components/Atoms/Typography/Text';
import { IProps } from "./types"
import { useWidth } from "@/hooks/useWidth";
import Pills from "@/components/Atoms/Pills/Pills";
    
const QuizzUnit = ({isfromNavBar, quizzHandle, src, text, id } : IProps) => {
    const width = useWidth();
    const breakpoint = 768;

    return(
    <Container onClick={() => quizzHandle(id)} $isfromNavBar={isfromNavBar}>
      {
        !(isfromNavBar && width < breakpoint) && 
          <Images 
              src={src}
              alt="quiz"
              width={isfromNavBar ? "240px" : "100%"}
              height={isfromNavBar ? "139px" : "auto"}
              borderRadius='10px'
          />
      }
        
        {
          !isfromNavBar ? (
            <>
              <Margin margin="10px" />
  
              <Text
              font='bold'
              color='offBlack'
              fontSize='1.1em'
              align='left'
              responsiveMobile={{
                  fontSize:"1.4em"
              }}>
                {text}
              </Text>
            </>
          ) : (
            <>
              <Margin margin="10px" marginMobile="0"/>

              <Text
              color="offBlack"
              font="extraBold"
              fontSize=".8em"
              align='left'
              responsiveMobile={{
                  fontSize:"1em"
              }}>
                {text}  
              </Text>
            </>
          )
  
        }

            <>
             <Margin margin="5px" />
             
            <Text
                font='regular'
                fontSize='0.7em'
                color='millionGray'
                align='left'
                responsiveMobile={{
                    fontSize:"1em"
              }}>No te va a llevar más de 5 minutos</Text>
            </>
       
    </Container>
    )
  }
  
export default QuizzUnit;