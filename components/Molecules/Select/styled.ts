import styled from "styled-components";
import { SelectStyledProps } from "./types"

export const SelectStyles = styled.div<SelectStyledProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 5px;
    position: relative;
    cursor: pointer;
   
    .selectorSelect {
        -webkit-appearance: none;
        cursor: pointer;
        -moz-appearance: none;
        appearance: none;
        background: transparent;
        border: 1px solid black;
        padding: 8px 20px 8px 8px; 
        font-size: 1.2rem;
        border-radius: 10px;
        -webkit-text-fill-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.black};

        option {
            -webkit-text-fill-color: ${props => props.theme.colors.black};
            color: ${props => props.theme.colors.black};
        }
    }

`

export const DivImgArrow = styled.div`
    position: absolute;
    top: 28%;
    right: 10px;
    cursor: pointer;
    pointer-events: none; 
`;