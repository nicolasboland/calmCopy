import CounterQty from "../../CounterQty/CounterQty"
import { CardCart } from "./styled"
import { IProps } from "./types"
import { formatNumber } from "@/utils/formatPrices"
import { useDispatch } from "react-redux";
import { onUpdateItemFromCart } from "@/state/cart/cartActions";
import { Content, Wrapper } from "../LoadingDiv/styled"
import variations_products from "@/utils/variations_products"
import type {} from 'redux-thunk/extend-redux';
import { useSelector } from 'react-redux'
import { IStore } from "@/state/types";
import { getLoadingPay } from "@/state/loading/loadingSelector";
import { GreenText } from "../CartDesktop/styled";

export const CardSidecart = ({ isOneProduct, keyItem, quantity, quantity_limit, name, totals, regular_price, imageSrc, removeItem, variations, isChange, isDelete, isCpCalc, isAddCoupon, fromCheckout }: IProps) => {

    const imgGeneric = 'https://di-sitebuilder-assets.s3.amazonaws.com/generic-placeholder.png';

    const loadingPay = useSelector((state: IStore) => getLoadingPay(state))

    const regularPrice = parseInt(regular_price);
    const subtotalPrice = parseInt(totals.line_subtotal);
    const totalRegPrice = regularPrice * quantity;
    const dispatch = useDispatch();

    const updateItem = (quantity: number) => {
        dispatch(onUpdateItemFromCart(keyItem, quantity, name));
    }

    return (
        <CardCart $fromCheckout={fromCheckout} $isOneProduct={isOneProduct}>
            <img
                src={imageSrc ? imageSrc.src : imgGeneric}
                className="cart-img"
                alt={imageSrc ? imageSrc.name : "Producto sin imagen"}
            />


            <div className="info-wrapper">
                <h3 className="product-name">{name}</h3>

                {
                    <p className="p-variation">
                        {
                            name !== "Entrega de Ensueño" ? (
                                variations && variations.attributes &&
                                    Object.keys(variations.attributes).map((at, index) => {
                                            const attribute = at ? variations.attributes[at as keyof typeof variations.attributes] : ""
                                            const variation = attribute ? variations_products[attribute as keyof typeof variations_products] : undefined
                                            const text = attribute && variation ? variation : ""
                                            
                                            return (
                                                <span key={at}>
                                                    {`${text.trim()}${Object.keys(variations.attributes).length - 1 == index ? "" : ", "}`}
                                                </span>
                                            )
                                        })
                            ) : (
                                <span key={"entrega_ensueno"}>Servicio de armado</span>
                            )
                        }

                    </p>
                }

                <div className="product-counter">
                    <CounterQty
                        qtyMax={quantity_limit}
                        quantity={quantity}
                        updateItem={updateItem}
                        backorder
                        isChange={isChange}
                        isDelete={isDelete}
                        isCpCalc={isCpCalc}
                        isAddCoupon={isAddCoupon}
                        fromCheckout={fromCheckout}
                    />
                </div>
            </div>


            <div className="section-prices-container">
                <Wrapper>
                    {
                        isChange || isDelete || isCpCalc ?
                            <Content>
                                <>
                                    <p className="product-price" style={{ width: '80px', height: '17px' }}></p>
                                </>
                            </Content>
                            :

                            <>
                                {
                                    totalRegPrice === subtotalPrice ?

                                        <>
                                            {
                                                totalRegPrice > 0 ? (
                                                    <p className="product-price">${formatNumber(totalRegPrice)}</p>
                                                ) : (
                                                    <GreenText>¡Gratis!</GreenText>
                                                )
                                            }
                                        </>

                                        :
                                        <>
                                            <p className="product-reg-price">${formatNumber(totalRegPrice)}</p>
                                            <p className="product-price disc-price">${formatNumber(subtotalPrice)}</p>
                                        </>
                                }
                            </>

                    }

                </Wrapper>
            </div>

            {
                !fromCheckout && (
                <button
                    title='Eliminar producto'
                    aria-label="Eliminar producto"
                    onClick={() => removeItem(keyItem)}
                    className="product-delete"
                    disabled={loadingPay || isChange || isDelete || isCpCalc}
                >
                    <img
                        className="product-delete-img"
                        alt='Icono de eliminar producto' src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/377bc4d8-bcc7-494f-926b-e814a73da300/fit=cover"
                    />
                </button>
                )
            }
        </CardCart>
    )

}