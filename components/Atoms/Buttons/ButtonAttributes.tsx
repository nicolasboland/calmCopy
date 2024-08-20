import React from 'react';
import { ButtonAttributesProps } from "./types"
import { BtnColor } from "./styled"

const ButtonAttributes = ({
    select,
    disabled,
    style,
    onClick,
    title,
    ariaLabel,
}: ButtonAttributesProps) => {
  
  
  return(
    <BtnColor
    $select={select}
    disabled={disabled}
    style={style}
    onClick={ onClick as React.MouseEventHandler<HTMLButtonElement>}
    title={title}
    aria-label={ariaLabel}
    >
  </BtnColor>
)};

export default ButtonAttributes;
