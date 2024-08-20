export interface GeocodeInfo {
  query: string
  address: string
  city: string
  province: string
  zipCode: string | undefined
}
export interface IFormData {
  address: string
  province: string
  city: string
  zipCode: string | undefined
  isPickup: boolean
  pickupOption: string
  preferedTime?: string | null
  preferedDate?: Date | null
  notes?: string
  placeDetails?: string
  selectedPickUpStore?: string | null
  checkDonar?: boolean | null
}

export interface IProps {
  handleStepFormSubmit: (step: string, data: IFormData) => void
  goNextStep: () => void
}
