import { useEffect, useState } from "react";
import { Container } from "./styled";
import { IProps, CountdownState } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import TimerText from "@/components/Molecules/TimerText/TimerText"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const Countdown = ({ endPromotionDate, isHeadbanner }: IProps) => {
  const [remainingTime, setRemainingTime] = useState<CountdownState>({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const format = {
    days: "d",
    minutes: "m",
    seconds: "s",
    hours: "h",
  };

  const targetDate = new Date(endPromotionDate ?? "");

  useEffect(() => {
    calculateTimeRemaining()
    const timerID = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = targetDate.getTime() - currentTime.getTime();

    if (timeDifference <= 0) {
      return {
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
      };
    }

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    setRemainingTime({
      days: String(days).padStart(2, "0"),
      hours: String(hours % 24).padStart(2, "0"),
      minutes: String(minutes % 60).padStart(2, "0"),
      seconds: String(seconds % 60).padStart(2, "0"),
    });
  };

  return (
    <Container
      $isHeadbanner={isHeadbanner}
      suppressHydrationWarning={true}
      $show={
        remainingTime.hours + remainingTime.minutes + remainingTime.seconds !=
        "000"
      }
    >
      <Text textTag="span" font="regular" fontSize="0.9rem" color="white">
        Quedan
      </Text>
      <Margin margin="3px"/>

      {remainingTime.days > "00" && (
        <>
          <TimerText
          number={remainingTime.days}
          text={format.days}
          />
        </>
      )}
      <TimerText
      number={remainingTime.hours}
      text={format.hours}
      />

      <TimerText
      number={remainingTime.minutes}
      text={format.minutes}
      />

      <TimerText
      number={remainingTime.seconds}
      text={format.seconds}
      />

    </Container>
  );
};

export default Countdown;
