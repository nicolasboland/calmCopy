import React from "react";
import { SeparatorProps } from "./types"
import { Styles } from "./styled"

const Separator = ({
  children,
  size,
  color
}: SeparatorProps) => {
  return (
    <Styles
      $size={size}
      $color={color}
    >
      {children}
    </Styles>
  );
};

export default Separator;
