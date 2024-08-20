import { IconStyles } from "./styled";
import { IconsProps } from "./types"

const Icons = ({
  children,
  width,
  height,
  padding,
  responsiveMobile,
  onClick,
}: IconsProps) => {
  return (
    <IconStyles
    onClick={onClick}
    $width={width}
    $padding={padding}
    $height={height}
    $responsiveMobile={responsiveMobile}
    >
      {children}
    </IconStyles>
  );
};

export default Icons;