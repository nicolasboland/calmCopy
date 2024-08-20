import React from 'react';
import { ButtonProps } from "./types"
import { ButtonStyles } from "./styled"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux"
import { onRedirectLoadingStart } from "@/state/loading/loadingActions"

const Button = ({
  children, 
  href,
  borderRadius,
  disabled,
  onClick,
  onChange,
  backgroundColor,
  backgroundColorHover,
  size,
  textColor,
  textColorHover,
  borderColor,
  type,
  font,
  fontSize,
  width,
  className,
  error,
  title,
  height,
  sizeMobile,
  disableStyles,
  responsiveMobile
}: ButtonProps) => {
  const router = useRouter();
  const dispatch = useDispatch()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (href) {
      router.push(href);
      dispatch(onRedirectLoadingStart())
    }
  };
  
  return(
    <ButtonStyles
    className={className}
    $size={size}
    disabled={disabled}
    onClick={href ? handleClick : onClick as React.MouseEventHandler<HTMLButtonElement>}
    onChange={e => {
      onChange && onChange(e)
    }}
    $backgroundColor={backgroundColor}
    $borderRadius={borderRadius}
    $backgroundColorHover={backgroundColorHover}
    $textColor={textColor}
    $textColorHover={textColorHover}
    $borderColor={borderColor}
    type={type}
    $sizeMobile={sizeMobile}
    $responsiveMobile={responsiveMobile}
    $disableStyles={disableStyles}
    $fontSize={fontSize}
    $font={font}
    $width={width}
    $height={height}
    $error={error}
    title={title}
  >
    {children}
  </ButtonStyles>
)};

export default Button;
