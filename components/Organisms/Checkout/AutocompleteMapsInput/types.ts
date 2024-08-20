import { GeocodeInfo } from '../Form/EntregaYFacturacion/types'

export interface ILocation {
  address_components: AddressComponent[]
  adr_address: string
  formatted_address: string
  geometry: Geometry
  icon: string
  icon_background_color: string
  icon_mask_base_uri: string
  name: string
  place_id: string
  plus_code: PlusCode
  reference: string
  types: string[]
  url: string
  vicinity: string
  html_attributions: any[]
  utc_offset_minutes: number
}

export interface AddressComponent {
  long_name: string
  short_name: string
  types: string[]
}

export interface Geometry {
  location: Location
  viewport: Viewport
}

export interface Location {
  lat: () => number
  lng: () => number
}

export interface Viewport {
  Ua: Ia
  Ia: Ia
}

export interface Ia {
  lo: number
  hi: number
}

export interface PlusCode {
  compound_code: string
  global_code: string
}

export interface IProps {
  submitLocation: (location: GeocodeInfo | null) => void
  handleError: (error: string) => void
  locationState: GeocodeInfo | null
  addressError?: boolean
}
