import styled from "styled-components";

export const CardCart = styled.article<{ $fromCheckout?: boolean, $isOneProduct?: boolean }>`
    display: flex;
    padding: .7rem 0;
    min-height: 75px;
    ${props => !props.$isOneProduct && " border-bottom: solid #eee 1px;"}
    gap: 15px;
    width: 100%;

    .cart-img {
        height: 75px;
        width: 20%;
        border-radius: 8.715px;
        object-fit: cover; 
        object-position: center; 
    }

    .info-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .section-prices-container {
        width: 25%;
        align-self: flex-end;
    }

    .p-variation {
        /* margin-top: -10px; */
    }

    .p-variation span {
        font-size: 0.9rem;
        line-height: 1;
        align-self: center;
        color: ${props => props.theme.colors.millionGray};
        font-family: ${props => props.theme.fonts.medium}, "Arial";
    }

    .product-name {
        color: ${props => props.theme.colors.offBlack};
        font-family: ${props => props.theme.fonts.light}, "Arial";
        font-size: 1rem;
        line-height: 1;
    }

    .product-variation {
        grid-column: 2/3;
        grid-row: 2/3;
    }

    .product-counter {
    }

    .disc-price {
        color: ${props => props.theme.colors.offBlack};
        font-weight: 900;
    }

    .product-price {
        font-family: ${props => props.theme.fonts.medium}, "Arial";
        font-size: 1.3rem;
        font-weight: 700;
    }

    .product-reg-price {
        text-decoration: line-through;
        font-size: .8rem;
        color: ${props => props.theme.colors.millionGray};
    }

    .product-delete, 
    .product-delete-disabled {
        justify-self: flex-end;
        grid-column: 3/4;
        grid-row: 1/2;
        background: none;
        border: none;
    }

    .product-delete:hover {
        cursor: pointer;
    }

    @media ${props => props.theme.devices.mobile}{
        padding: ${props=>props.$fromCheckout ? "1rem 0" : "1rem 0.7rem"};
    }
`;

