import { styled } from 'styled-components'

export const CartSummaryContainer = styled.section`
  display: none;

  @media ${({ theme }) => theme.devices.biggerMobile} {
    display: flex;
    background-color: ${props => props.theme.colors.drWhite};
    flex-direction: column;
    margin-top: 12px;
    padding: 10px 20px 20px 20px;
  }
`

export const CartHeading = styled.h2`
   font-family: ${props => props.theme.fonts.bold};
  font-size: 1.125rem;
  margin-bottom: 4px;
`

export const CartSubheading = styled.p`
font-family: ${(props) => props.theme.fonts.bold};
  span {
    color: ${(props) => props.theme.colors.millionGray};
  }
  font-size: 1rem;
  margin-bottom: 8px;
`

export const TitleAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ShowDetailsText = styled.p`
  font-family: ${props => props.theme.fonts.bold};
  text-decoration: underline;
  font-size: 0.9rem;
  text-align: center;
  color: ${(props) => props.theme.colors.dullViolet};
  cursor: pointer;
`

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  width: 90vw;
  max-width: 770px;
`

export const CartItemImgContainer = styled.article`
  max-width: 68px;
  position: relative;

  img {
    object-fit: cover;
    border-radius: 8px;
    height: 68px;
    width: 68px;
  }

  p {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #dadada;
    font-size: 1rem;
    ${(props) => props.theme.fonts.medium};
    padding: 2px 10px;
    border-radius: 500px;
  }
`

export const StyledHr = styled.hr`
  background-color: ${(props) => props.theme.colors.millionGray};
  margin: 20px 0;
`
export const ImgWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const ItemsList = styled.ul`
  margin-left: 20px;
`

export const ItemDescription = styled.li`
  margin-bottom: 3px;

  p {
    font-family: ${(props) => props.theme.fonts.medium};
    color: ${(props) => props.theme.colors.millionGray};
  }
`