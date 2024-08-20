import { RotatingDiv, SpinnerContainer, SpinnerDiv, SpinnerCenter, SpinnerOverlay } from "./styled";

interface SpinnerProps {
  isBlack?: boolean;
  isCenterScreen?: boolean;
  hasOverlay? : boolean;
}

const Spinner = ({isBlack, isCenterScreen, hasOverlay} : SpinnerProps) => {
  return (
    <>
      {isCenterScreen ? (
        <SpinnerContainer $isCenterScreen={isCenterScreen}>
          <SpinnerCenter $isBlack={isBlack}/>
        </SpinnerContainer>
      ) : hasOverlay ? (
          <SpinnerOverlay>
            <RotatingDiv $isBlack={isBlack} $hasOverlay={hasOverlay}/>
          </SpinnerOverlay>
      ) : (
        <SpinnerContainer>
          <SpinnerDiv>
          <SpinnerCenter $isBlack={isBlack}/>
          </SpinnerDiv>
        </SpinnerContainer>
      )}
    </>
  );
}

export default Spinner;