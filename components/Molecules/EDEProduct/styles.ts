import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 16px;
    padding: 0.75rem;
    margin-bottom: .4rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 4px;
`

export const Input = styled.input`
  width: 20px;
  height: 20px;
  display: flex;
  align-self: center;
`;