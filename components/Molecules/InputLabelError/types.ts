export type InputLabelErrorProps = {
  error: boolean
  input: {
    label?: string,
    width?: string,
    error?: string,
    type?: string,
    name?: string,
    value?: string,
    placeholder?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean,
    disabled?: boolean,
    dataDecidir?: string
  }
};
