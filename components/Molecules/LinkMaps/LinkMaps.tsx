import { useState, useRef, useEffect } from "react";
import {
  ButtonClose,
  DivModal,
  ContainerModal,
  VioletText,
  Map,
} from "./styled";
import { useCloseModal } from "@/utils/useCloseModal";
import { CloseIcon } from "@/utils/Icons";

const LinkMaps = ({ local }: { local: "Palermo" | "Chacarita" }) => {
  const [modal, setModal] = useState(false);
  const url =
  local === "Chacarita"
      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.819989747363!2d-58.44780120000001!3d-34.583421099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5b6d532d689%3A0x51c26e4d59f2c83a!2sCalm%20es%20simple!5e0!3m2!1ses!2sar!4v1701801587094!5m2!1ses!2sar"
      : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.8336212208246!2d-58.44766420872516!3d-34.58307622033839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59d58aacdfd%3A0x71f98f0b710a8bfe!2sCalm%20es%20simple!5e0!3m2!1ses!2sar!4v1701803053355!5m2!1ses!2sar";

  const modalHandle = () => {
    modal ? setModal(false) : setModal(true);
  };

  const modalRef = useRef<HTMLDivElement>(null);
  const modalRefChildren = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const { addOutsideClickListener, removeOutsideClickListener } =
      useCloseModal({
        ref: modalRef,
        redChildren: modalRefChildren,
        onClose: modalHandle,
      });

    addOutsideClickListener();

    return () => removeOutsideClickListener();
  }, [modal]);

  return (
    <>
      <VioletText onClick={() => modalHandle()}>Ver mapa</VioletText>
      {modal ? (
        <ContainerModal ref={modalRef}>
          <DivModal ref={modalRefChildren}>
            <ButtonClose
              title="Cerrar"
              aria-label="Cerrar"
              onClick={() => modalHandle()}
            >
              <CloseIcon />
            </ButtonClose>
            <Map src={url} loading="lazy"></Map>
          </DivModal>
        </ContainerModal>
      ) : (
        <></>
      )}
    </>
  );
};

export default LinkMaps;
