import styled from "styled-components";

export const ContainerInput = styled.div<{ $cols?: string }>`
grid-column: ${(props) =>
    props.$cols ? `span ${props.$cols} / span 1` : 'span 1 / span 1'};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media ${({ theme }) => theme.devices.mobile} {
    grid-column: span 1 / span 1;
  }
`;
export const FormLabel = styled.div`
font-size: 1rem;
display: flex;
width: 100%;
align-items: center;
gap: 6px;
`;