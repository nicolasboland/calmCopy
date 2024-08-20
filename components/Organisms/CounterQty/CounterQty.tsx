import Spinner from '@/components/Organisms/Checkout/Spinner/Spinner';
import { CounterQtyStyle } from './styled';
import { IProps } from './types';
import { getHasEDE } from '@/state/cart/cartSelector'
import { useSelector } from 'react-redux'
import { getLoadingPay } from "@/state/loading/loadingSelector";
import { getCheckoutOnlyToPay } from '@/state/order/orderSelector';
import { IStore } from '@/state/types';


const CounterQty = ({qtyMax, quantity, backorder, updateItem, isChange, isDelete, isCpCalc, isAddCoupon, fromCheckout}: IProps) => {
    const checkoutOnlyToPay = useSelector((state: IStore) => getCheckoutOnlyToPay(state));
    const hasEDE = useSelector(getHasEDE)
    const loadingPay = useSelector(getLoadingPay)

    const addOne = () => {
        if(backorder) {
            const newCounter = quantity + 1
            updateItem(newCounter)
        } else {
            if(quantity < qtyMax && qtyMax > 0) {
                const newCounter = quantity + 1
                updateItem(newCounter)
            }
        }

    }

    const subtractOne = () => {
        if(quantity > 0 && qtyMax > 0) {
            const newCounter = quantity - 1
            updateItem(newCounter)
        }
    }

    const disabledSum = (): boolean => {
        if(backorder) {
            return false
        }

        return quantity === qtyMax || qtyMax <= 0 ? true : false
    }

    return (
        <CounterQtyStyle>
            {
                !checkoutOnlyToPay ? (
                    (isCpCalc || isDelete ||  isChange || isAddCoupon) && !fromCheckout ?

                    <Spinner isBlack></Spinner>

                    // <>
                    //     <button 
                    //         aria-label='Eliminar una unidad del producto'
                    //         title='Eliminar una unidad del producto'
                            
                    //         className='btn-add-rest'
                    //         disabled
                    //     >
                    //         -
                    //     </button>
                    //     <div className="counter-visor">
                    //         <Spinner></Spinner>
                    //     </div>
                    //     <button 
                    //         aria-label='Agregar una unidad del producto'
                    //         title='Agregar una unidad del producto'
                            
                    //         className='btn-add-rest'
                    //         disabled
                    //     >+</button>
                    
                    // </>
                    :
                    <>
                        {
                            !fromCheckout && (
                                <button 
                                    aria-label='Eliminar una unidad del producto'
                                    title='Eliminar una unidad del producto'
                                    onClick={subtractOne} 
                                    className='btn-add-rest'
                                    disabled={
                                        quantity > qtyMax 
                                        || qtyMax <= 0 
                                        || quantity <= 0
                                        ||loadingPay
                                    }
                                >-</button>
                            )
                        }
                        <p className="counter-visor">
                            {
                                fromCheckout ? ` Cantidad: ${quantity}` : `${quantity}`
                            }
                        </p>
                        {
                            !fromCheckout && (
                            <button 
                                aria-label='Agregar una unidad del producto'
                                title='Agregar una unidad del producto'
                                onClick={addOne} 
                                className='btn-add-rest'
                                disabled={disabledSum()
                                    || hasEDE
                                    || loadingPay
                                }
                            >+</button>
                            )
                        }
                    </>
                ) : (
                    <p className="counter-visor">{quantity}</p>
                )
            }
            
        </CounterQtyStyle>
    )
}

export default CounterQty