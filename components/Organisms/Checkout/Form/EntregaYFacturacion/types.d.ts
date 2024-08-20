export interface GeocodeInfo {
  address: string
  city: string
  province: string
  zipCode: string | undefined,
  coordinatesGps?: string | undefined,
  coordinatesAddress?: string | undefined
}

export interface IFormData {
  address: string
  province: string
  city: string
  cityError: string
  zipCode: string | undefined
  zipCodeError: string
  isPickup: boolean
  pickupOption: string
  preferedTime?: string | null
  preferedDate?: Date | null
  notes?: string
  notesError?: string
  placeDetails?: string
  placeDetailsError?: string
  selectedPickUpStore?: string | null
  checkDonar?: boolean | null
  coordinatesGps?: string | undefined,
  coordinatesAddress?: string | undefined
}

export interface UserData {
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
  checkDonar?: boolean | null,
  coordinatesGps?: string | undefined,
  coordinatesAddress?: string | undefined
}

export interface IProps {
  handleStepFormSubmit: (step: string, data: UserData) => void
  goNextStep: () => void
}
