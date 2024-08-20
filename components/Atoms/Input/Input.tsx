import { InputProps } from "./types"
import { InputStyles } from "./styled"

const Input = ({
    children,
    type,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    required,
    disabled,
    checked,
    width,
    error,
    color,
    height,
    backgroundColor,
    refInput,
    autoComplete,
    borderRadius,
    borderColor,
    borderColorFocused
}: InputProps) => {

  return (
    <InputStyles
      type={type}
      name={name}
      $width={width}
      placeholder={placeholder}
      value={value}
      onChange={e => {
        onChange && onChange(e)
      }}
      onBlur={e => {
        onBlur && onBlur(e)
      }}
      required={required}
      $borderRadius={borderRadius}
      disabled={disabled}
      $borderColor={error ? "rareRed" : borderColor}
      $color={color}
      $borderColorFocused={borderColorFocused}
      $height={height}
      $backgroundColor={backgroundColor}
      checked={checked}
      ref={refInput}
      autoComplete={autoComplete}
    >
      {children}
    </InputStyles>
  );
};

export default Input;