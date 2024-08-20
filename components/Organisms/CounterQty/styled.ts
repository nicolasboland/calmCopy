import styled from "styled-components";


export const CounterQtyStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    &, .btn-add-rest {
        font-size: 1rem;
        font-weight: 700;
    }

 .btn-add-rest {
    background: none;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
 }

 .btn-add-rest:disabled {
    color:  #AAAAAA;
    cursor: initial;
}

 .counter-visor {
    min-width: 1rem;
    text-align: center;
    font-family: ${props => props.theme.fonts.light}, "Arial";
 }
`