import styled from "styled-components";

export const DivUnit = styled.div<{ $isComparition?: boolean }>`
  position: relative;
  margin: 0.4rem;
  width: ${props => props.$isComparition ? "100%" : "280px"};
  cursor: pointer;
  box-sizing: border-box; 

  @media ${props=>props.theme.devices.mobile} {
  flex: 1 1 calc(50% - 0.8rem);
  max-width: calc(50% - 0.8rem);
  box-sizing: border-box;
  }
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: row;

  @media ${props => props.theme.devices.mobile} {
    flex-direction: column;
  }
`;

export const Prices = styled.div`
  display: flex;
`

export const DescriptionContainer = styled.div<{ $landing?: string }>`
  min-height: ${props => props.$landing === "almohadas"
  ? "45px"
  : props.$landing === "feria" 
  ? "80px"
  : (props.$landing === "ropa de cama" || props.$landing === "accesorios" || props.$landing === "bases" || props.$landing === "colchones" || props.$landing === "perro y bebe")
  && "60px"
  };

  @media ${props => props.theme.devices.mobile} {
    min-height: ${props => props.$landing === "feria"
  ? "70px"
  : (props.$landing === "ropa de cama" || props.$landing === "accesorios" || props.$landing === "bases" || props.$landing === "colchones" || props.$landing === "almohadas" || props.$landing === "perro y bebe")
  &&  "55px"
  };
  }
`