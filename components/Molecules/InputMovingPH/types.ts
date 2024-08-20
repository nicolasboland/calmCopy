import { LegacyRef } from "react";

export type InputLabelErrorProps = {
  error: boolean,
  isInputDirection?: boolean,
  isMandatory?: boolean,
  errorMark?: boolean,
  input: {
    id?: string
    ref?: LegacyRef<HTMLInputElement>,
    label?: string,
    error?: string,
    name?: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
};
