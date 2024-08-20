import { IHoliday } from '@/state/products/types'

export interface IProps {
  startDate?: Date
  active: boolean
  setDate?: (date: Date | undefined) => void
  disableDates?: IHoliday[]
}
