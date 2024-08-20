import React, { useState } from 'react'
import { CloseButton, MobileBackground, StyledCartMobile, ContainerCloseButton} from './styled'
import Cart from '../CartDesktop/CartDesktop'
import { CloseIcon } from "@/utils/closeIcon"

interface IProps {
  closeCart: () => void
  isCartOpen?: boolean
}

function CartMobile({ closeCart, isCartOpen }: IProps) {
  return (
    <>
      <MobileBackground onClick={closeCart} />
      <StyledCartMobile onClick={() => {}}>
        <ContainerCloseButton>
          <CloseButton onClick={closeCart}>
            <CloseIcon/>
          </CloseButton>
        </ContainerCloseButton>
        <Cart isCartOpen={isCartOpen}/>
      </StyledCartMobile>
    </>
  )
}

export default CartMobile
