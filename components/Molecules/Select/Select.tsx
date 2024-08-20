import React from "react";
import { SelectProps } from "./types"
import { SelectStyles, DivImgArrow } from "./styled"
import Images from "../../Atoms/Images/Images";

const Select = ({
  children,
  arrOptions,
  onChangeSelect,
  selectValue,
}: SelectProps) => {
  return (
    <SelectStyles>
        {
            arrOptions ? (
                <select
                className="selectorSelect"
                onChange={e => {
                    onChangeSelect && onChangeSelect(e)
                }}
                value={selectValue}
            >
                <option
                    key="select"
                    disabled
                >
                    Elegí una opción
                </option>

                {arrOptions.map( (option, index) => {
                    return (
                        <option
                            key={index}
                            value={option.value}
                        >
                            {option.input}
                        </option>
                        )
                })}
            </select>
            ) : (
            <>{children}</> //se puede pasar el objeto de arriba como children en caso de ser muy complejo
            )
        }
        <DivImgArrow>
            <Images
                    src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/c0e318b7-0843-4afd-2bea-dfa0acc1d300/public"
                    alt="Flecha"

                />
        </DivImgArrow>

      
        
    </SelectStyles >
  );
};

export default Select;