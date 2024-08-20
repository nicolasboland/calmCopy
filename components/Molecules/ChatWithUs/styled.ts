import styled from "styled-components";
import { theme } from "@/utils/Theme";


export const Wrapper = styled.div`
    display: flex;

    border-style: solid;
    border-width: 1px;
    border-color: ${theme.colors.explosiveGray};
    padding: 20px 10px;
    border-radius: 10px;
    margin: 15px 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 5px 5px 10px
`;


export const DivText = styled.div`
    margin-top: 10px;
    cursor: pointer;
`;
