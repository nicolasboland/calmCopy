import { ChangeEvent } from 'react';

export type SelectProps = {
    children?: React.ReactNode;
    arrOptions?: {
        value: string,
        input: string
    }[];
    onChangeSelect?: (e: ChangeEvent<HTMLSelectElement>) => void;
    selectValue?: string;
};

export type SelectStyledProps = {
};