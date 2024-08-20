import React, { useEffect, useState, useRef } from "react"
import { Autocomplete, Libraries, useJsApiLoader } from "@react-google-maps/api"
import { ILocation, InputGoogleAutocompleteProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import { FormInput,  FormLabel, MandatoryText} from "./styled"
import { Loader } from "@googlemaps/js-api-loader"

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

export const InputGoogleAutocomplete = ({
  error,
  input,
  submitLocation = () => {},
  handleError
}: InputGoogleAutocompleteProps) => {
  const [place, setPlace] = useState<ILocation | null>(null)
  const [_inputValue, setInputValue] = useState('')
  const [libraries, _] = useState<Libraries>(["places"])
  const inputRef = useRef<HTMLInputElement>(null);
  const [longitud, setLongitud] = useState<number>(0)
  const [latitud, setLatitud] = useState<number>(0)
  const [autocompleteOptions, setAutocompleteOptions] = useState<google.maps.places.AutocompleteOptions>()

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
    language: "es",
  });

  useEffect(() => {
    isLoaded && getCurrentLocation()
  }, [isLoaded])

  useEffect(() => {
    loadError !== undefined && console.error("Error loading Google Maps script: ", loadError);
  }, [loadError])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      if (inputRef.current?.value.length > 90) {
        const limitValue = inputRef.current?.value.substring(0, 90);
        inputRef.current && (inputRef.current.value = limitValue);
      } else if (/^\s+$/.test(inputRef.current.value)) {
        handleError("No puede contener espacios en blanco")
      } else if (/<[^\s<>]*>/.test(inputRef.current.value)) {
        handleError("Contiene caracteres inválidos")
      } else if (!inputRef.current.value) {
        handleError("Debe completar la dirección")
      } else {
        handleError("")
      }
    }

    if (event.target.value.length <= 90) {
      setInputValue(event.target.value)

      if (!event.target.value?.length) {
        submitLocation({
          address: '',
          city: '',
          province: '',
          zipCode: '',
        })
      }
    }}

  useEffect(() => {
    if (!place?.address_components?.length) return submitLocation(null)

    const location = {
      address:"",
      city:"",
      cityError: "",
      province: "",
      zipCode:"",
      zipCodeError: ""
    }
    place.address_components.map(element=>{
      if(element.types.includes("route")){
        location.address=element.long_name + " " + location.address;
      }
      if (element.types.includes("street_number")){
        location.address= element.long_name + " " + location.address;
      }
      if (element.types.includes("point_of_interest")){
        location.address=element.long_name;
      }
      if (element.types.includes("administrative_area_level_1")){
        location.province=element.short_name
      }
      if (element.types.includes("administrative_area_level_2")){
        location.city=element.long_name
      }
      if (element.types.includes("postal_code")){
        const cp = element.long_name?.slice(1)
        location.zipCode=cp
      }

    })
    if (location.address){
      submitLocation(location)
    }
  }, [place])

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {

    autocomplete.addListener('place_changed', () => {
      const selectedPlace: unknown = autocomplete.getPlace()
      setPlace(selectedPlace as ILocation)
    })
    autocomplete.setComponentRestrictions({ country: 'AR' })
  } 

  useEffect(() => {
    submitLocation({
      address: _inputValue,
      city: '',
      province: '',
      zipCode: '',
    })
  }, [_inputValue])

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitud(latitude)
          setLongitud(longitude)
        },
        (error) => {
          console.error('Error obteniendo la ubicación:', error);
        }
      );
    } else {
      console.error('Geolocalización no es compatible en este navegador');
    }
  }



  useEffect(() =>{
    if (latitud !== 0 && longitud !== 0) {
      const circle = new google.maps.Circle({
        center: new google.maps.LatLng(latitud, longitud),
        radius: 1000, 
      });

      const bounds = circle.getBounds();

      setAutocompleteOptions({
        bounds: bounds?.toJSON() as google.maps.LatLngBoundsLiteral,
        types: ['geocode'], 
      })
    }
  }, [latitud, longitud])

  return isLoaded && (
    <>
        <Autocomplete onLoad={onLoad} options={autocompleteOptions}>
          <>
            <FormInput
              ref={inputRef}
              placeholder=" "
              name="address"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <FormLabel $isDirection>Dirección (Calle y Número) <b>*</b></FormLabel>
          </>
        </Autocomplete>
    </>
  )
}
