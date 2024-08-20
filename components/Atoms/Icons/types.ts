import {MouseEvent} from 'react';

export type IconsProps = {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    padding?: string
    responsiveMobile?: responsiveMobile
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  };

type responsiveMobile = {   
    width?: string;
    height?: string;
}

export type IconStyledProps = {
    $width?: string;
    $height?: string;
    $padding?: string
    $responsiveMobile?: responsiveMobile

};