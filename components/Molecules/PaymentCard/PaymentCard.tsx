import React from "react";
import Images from "@/components/Atoms/Images/Images";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import { Iprops } from "./types";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { 
  DivUnitPayment,
  DivContentUnit,
  DivImageUnit,
  DivTextUnit
} from "./styled";

import parse from 'html-react-parser';

const PaymentMethod = ({ linkImg, method, description }: Iprops) => {

  return (
    <DivUnitPayment>
      <DivContentUnit>
        <DivImageUnit>
          <Images
            src={linkImg}
            alt="payment method"
          />
        </DivImageUnit>
        <DivTextUnit>
          <Titles
          titleTag="h3"
          color="offBlack"
          font="bold"
          fontSize="18px">{method}</Titles>
          <Text
          color="millionGray"
          font="regular"
          fontSize="13px">{parse(description)}</Text>
        </DivTextUnit>
      </DivContentUnit>
    </DivUnitPayment>
  );
};

export default PaymentMethod;
