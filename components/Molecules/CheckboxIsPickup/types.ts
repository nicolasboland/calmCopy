import { MouseEventHandler, ReactNode } from "react";

export type CheckboxIsPickupProps = {
  icon: ReactNode
  text: string;
  subText?: string | null
  isSelected: boolean
  isLoading: boolean
  formCP?: number
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  subTextShow?: boolean
};