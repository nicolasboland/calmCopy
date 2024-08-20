import { ChangeEventHandler } from "react"

export type InputOptionSelectProps = {
  label?: string
  options: any[]
  onChange?:ChangeEventHandler<HTMLSelectElement>
  selectName: string
  defaultOption?: boolean
}