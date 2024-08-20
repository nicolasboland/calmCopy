export type InputGoogleAutocompleteProps = {
  error: boolean
  input: {
    label?: string,
    error?: string,
    type?: string,
    name?: string,
    value?: string,
    placeholder?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean,
    disabled?: boolean,
  }
  submitLocation: (location: GeocodeInfo | null) => void
  handleError: (error: string) => void
};

export interface GeocodeInfo {
  address: string
  city: string
  province: string
  zipCode: string | undefined
}

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

export interface PlusCode {
  compound_code: string
  global_code: string
}

export interface Viewport {
  Ua: Ia
  Ia: Ia
}

export interface Ia {
  lo: number
  hi: number
}