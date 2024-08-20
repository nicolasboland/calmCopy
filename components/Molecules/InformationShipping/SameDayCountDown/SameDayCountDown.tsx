import { SubtitleDiv, TitleDiv, Wrapper } from './styled';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { calculateTimeRemaining } from '@/utils/calculateRemainingTime';
import Images from "@/components/Atoms/Images/Images"
import Text from '@/components/Atoms/Typography/Text';

const SameDayCountDown = ({dateToCorte}: {dateToCorte: Date}) => {
  const [remainingTime, setRemainingTime] = useState<{days: number | string, hours: number | string, minutes: number | string, seconds: number | string}>();
  const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/Argentina/Buenos_Aires'}));

  useEffect(() => {
    const timerID = setInterval(() => {
      setRemainingTime(calculateTimeRemaining(dateToCorte));
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  let nextText = remainingTime?.days == 0 && remainingTime.hours == 0 ? "los próximos" : "las próximas";
  let dateText = dateToCorte && dateToCorte.getDate() == now.getDate() + 1 ? "<b>mañana</b> a tu dirección" : "<b>hoy</b>";

  return (
    <Wrapper>
      <TitleDiv>
        <Images src='https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1bdcca3d-f850-495e-6959-b475844bab00/fit=cover' alt='camion_delivery'/>
        <Text
        fontSize="15px"
        color="parkPicnic"
        font="medium"
        >
        Llega 
        <Text
        textTag="b"
        font="bold"
        > 
        gratis
        </Text> 
        {parse(dateText)}
        </Text>
      </TitleDiv>
      {remainingTime && dateToCorte && dateToCorte.getDate() == now.getDate() &&
        <SubtitleDiv>
          comprando dentro de {nextText}
          <Text
          textTag="b"
          color="mangoTango"
          font="bold"
          >
          {parse(` <span>${remainingTime.hours}</span>h  <span>${remainingTime.minutes}</span>m  <span>${remainingTime.seconds}</span>s`)}
          </Text>
        </SubtitleDiv>
      }
    </Wrapper>
  )
}

export default SameDayCountDown;