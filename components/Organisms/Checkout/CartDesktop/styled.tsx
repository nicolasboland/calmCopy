import { styled } from 'styled-components'

export const CartHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-family: ${(props) => props.theme.fonts.medium};
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.offBlack};
  }
`

export const StyledCart = styled.section<{ $isSeguimiento?:boolean, $isCartOpen?: boolean}>`
  display: flex;
  ${props => !props.$isCartOpen && `background-color: ${props.theme.colors.drWhite};`}
  padding: ${props => props.$isCartOpen ? "8% 6%" : "8% 13%"};
  flex-direction: column;
  gap: 11px;
  ${props => props.$isSeguimiento && "box-shadow: 5px 5px 10px rgba(0,0,0,0.2);"}
  border-radius: 16px;
`

export const CartItemsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  max-height: 55vh;
  overflow-y: auto;
`

export const GreenText = styled.span`
  color: #40913d;
  font-weight: 900;
  font-family: ${props=>props.theme.fonts.extraBold}, "Arial";
`

export const CartText = styled.p<{ $fontSize?: string }>`
  color: ${(props) => props.theme.colors.offBlack};
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: 600;
  font-size: ${({ $fontSize }) => ($fontSize == 'lg' ? '1.3rem' : '1rem')};
`

export const StyledHr = styled.hr`
  background-color: ${(props) => props.theme.colors.millionGray};
  margin: 10px 0;
`

export const PurpleText = styled.p`
  color: ${(props) => props.theme.colors.dullViolet};
  text-align: center;
  display: flex;
  gap: 8px;
  font-family: ${(props) => props.theme.fonts.bold};
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-top: 16px;

  svg {
    width: 20px;
    height: 20px;
  }
`

export const ListCoupons = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 0.7rem;
  align-items: center;
  flex-direction: column;
  gap: 6px;
`;

export const ListItem = styled.li<{ $isSeguimiento?: boolean }>`
  width: 100%;
  display: flex;
  flex: 1;
  
  ${props => !props.$isSeguimiento 
  ? "justify-content: space-between;" 
  : "flex-wrap: wrap; gap: .7rem; margin-top: .7rem;"}
  font-weight: 500;
  font-size: 0.8rem;
  align-items: center;
  padding-bottom: 11px;
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

export const BtnDeleteCoupon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: auto;
  }
`;

export const CouponDiscount = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #398245;
`;

export const CartItem = styled.article`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const CartItemImage = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 9px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }
`

export const CartItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0;
`

export const CartTitle = styled.h3`
  color: ${(props) => props.theme.colors.offBlack};
  ${(props) => props.theme.fonts.medium};
  font-size: 1rem;
`

export const CartItemText = styled.p<{ $gray?: boolean }>`
  color: ${({ $gray, theme }) =>
    $gray ? theme.colors.millionGray : theme.colors.offBlack};
  ${(props) => props.theme.fonts.medium};
  font-size: 0.875rem;
  &:last-child {
    margin-top: auto;
  }
`

export const CartItemSubtotal = styled.p`
  color: ${(props) => props.theme.colors.offBlack};
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1rem;
  line-height: 1.2rem;
`

export const CartItemTotal = styled.p`
  color: ${(props) => props.theme.colors.offBlack};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.2rem;
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.millionGray};
  font-size: 0.8rem;
  line-height: 1.2rem;
`
export const ButtonCoupon = styled.button<{$notEnabled?: boolean}>`
  display: flex;
  background: none;
  border: none;
  margin: .5rem 0 .5rem 0;       
  gap: 5px;
  font-size: 1rem;
  align-items: center;
  color: ${(props) => props.$notEnabled ? props.theme.colors.millionGray : props.theme.colors.fadingHorizon};

  &:hover {
    cursor: ${(props) => props.$notEnabled ? "not-allowed" : "pointer"};
  }
`

export const CartTotals = styled.div`
  align-self: flex-end;
  margin-left: auto;
  text-align: right;
`

export const ErrorP = styled.p`
  font-size: 0.8rem;
  color: red;
  font-weight: 700;
  text-align: center;
  margin: 0.4rem;
`

export const SectionAddCoupon = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 1.6rem;
`;

export const InputCoupon = styled.input`
  border-radius: 7px;
  border: 2px solid rgb(184 184 184);
  padding: 3px 5px;

  &:focus {
    outline: none !important;
    border: 2px solid rgb(250, 189, 0);
  }
`;

export const BtnCoupon = styled.button`
  padding: 4px 10px;
  background-color: gray;
  color: white;
  font-weight: 700;
  letter-spacing: 1.5px;
  border-radius: 7px;
  border: 2px solid gray;
  display: flex;
  align-items: center;

  &:hover {
    border-color: #5e5e5e;
    background-color: #5e5e5e;
  }

  &:focus {
    border-color: rgb(250, 189, 0);
  }
`;

export const IconDeleteCoupon = styled.img`
  width: 0.8rem;
  display: flex;
  align-items: center;
`

export const TotalPrice = styled.span`
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1.5rem;
`