import React, { useState, useRef, useEffect } from "react"
import { useCloseModal } from "@/utils/useCloseModal"
import { ModalProps, IPropsChildrens } from "./types"

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [modal, setModal] = useState(false)

  const modalHandle = () => {
    modal ? setModal(false) : setModal(true)
  }
  const modalRef = useRef<HTMLDivElement>(null)
  const modalRefChildren = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { addOutsideClickListener, removeOutsideClickListener } =
      useCloseModal({
        ref: modalRef,
        redChildren: modalRefChildren,
        onClose: modalHandle
      })

    addOutsideClickListener()

    return () => removeOutsideClickListener()
  }, [modal])

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child as React.ReactElement<IPropsChildrens>, {
      modal,
      modalHandle,
      modalRef,
      modalRefChildren,
      setModal
    })
  )

  return <div ref={modalRef}>{childrenWithProps}</div>
}

export default Modal
