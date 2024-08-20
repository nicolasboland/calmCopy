import styled from "styled-components";



export const CartTitleThank = styled.h3`
  color: ${(props) => props.theme.colors.offBlack};
  ${(props) => props.theme.fonts.medium};
  font-size: .9rem;
`

export const CartDescriptionThank = styled.h3`
  color: ${(props) => props.theme.colors.millionGray};
  ${(props) => props.theme.fonts.medium};
  font-size: .8rem;
`

export const ListItem = styled.li`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.8rem;
  align-items: center;
`;

export const NameCoupon = styled.span`
  display: flex;
  align-items: center;
  background-color: #631F99;
  padding: 0.4rem 0.6rem;
  color: #fff;
  gap: 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  
`;

export const CouponContainer = styled.div<{ $isSeguimiento?: boolean }>`
  display: flex;
  ${props => props.$isSeguimiento && "flex-direction: column; gap: .5rem;"}
  flex-direction: column;
  gap: 5px;
`