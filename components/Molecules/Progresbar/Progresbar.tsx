import { ProgresbarProps } from "./types"
import { ProgresbarStyles,  ProgressBarContent, ActualProgressBar } from "./styled"
import { useEffect } from 'react';
import Text from "@/components/Atoms/Typography/Text"

const Progresbar = ({
    text,
    textPercentage
}: ProgresbarProps) => {

    useEffect(() => {
        const isInViewport = (elem: HTMLElement) => {
            let elementTop = elem.offsetTop;
            let elementBottom = elementTop + elem.offsetHeight;
            let viewportTop = window.scrollY;
            let viewportBottom = viewportTop + window.innerHeight;
            return elementBottom > viewportTop && elementTop < viewportBottom;
        }

        let progress: HTMLElement | null = document.querySelector("#progress");
        if(progress) {
            let progressBar: HTMLElement | null = progress.querySelector("#progress-bar");
            window.addEventListener("scroll", () => {
                if (progress && isInViewport(progress) && progressBar) {
                    progressBar.style.width = "99%";
                    progressBar.style.transition = "width 1s";
                }
            });
        }
    }, [])

  return (
    <ProgresbarStyles id="progress">
        <ActualProgressBar id="progress-bar" />
        <ProgressBarContent>
            <Text
                textTag={"span"}
                color={"white"}
                fontSize=".8em"
                lineHeight="35px"
            >
               {text}
            </Text>
            <Text
                textTag={"span"}
                color={"white"}
                fontSize=".8em"
                lineHeight="35px"
            >
                {textPercentage}
            </Text>
        </ProgressBarContent>
    </ProgresbarStyles>
  );
};

export default Progresbar;