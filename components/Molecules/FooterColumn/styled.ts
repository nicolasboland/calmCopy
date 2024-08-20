import styled from "styled-components";

export const StyledContainerColumn = styled.div<{$hasTitle?:string}>`
    display: flex;
    justify-content:start;
    flex-direction: column;
    margin-bottom:auto;
    width:20ch;
    text-transform: lowercase;
    
    ${props=> !props.$hasTitle && 'padding-top: 30px;'}

    @media ${props => props.theme.devices.mobile} {
        height:100%;
        width:50%;
        margin: 15px 0 0 20px;
    }
`;
