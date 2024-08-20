import React, { useEffect } from 'react'

import { format } from 'date-fns'
import { DateFormatter, DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import es from 'date-fns/locale/es'
import { CalendarContainer, DatePickerContainer } from './styled'
import ToggleOptionsButton from '../Form/ToggleOptionsButton/ToggleOptionsButton'
import { IHoliday } from '@/state/products/types'

interface IProps {
  startDate?: Date
  active: boolean
  setDate?: (date: Date | undefined) => void
  disableDates?: IHoliday[] | String[]
}

export default function DatePicker({ startDate, disableDates, active, setDate = () => {} }: IProps) {
  const [selected, setSelected] = React.useState<Date>()
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false)
  const [buttonValue, setButtonValue] = React.useState('')

  const datesNotAvailable = disableDates?.map(date => new Date(date+"T00:00:00-03:00"))
  
  useEffect(() => {
    setIsDatePickerOpen(active)
  }, [active])

  const formatCaption: DateFormatter = (date, options) => {
    const formattedMonth = format(date, 'LLLL yyyy', {
      locale: options?.locale,
    })
    return (
      <>{formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1)}</>
    )
  }

  const handleDaySelect = (date: Date | undefined) => {
    
    setSelected(date)
    if (date) {
      setButtonValue(format(date, 'dd/MM/yy'))
      setIsDatePickerOpen(false)
    } else {
      setSelected(startDate)
    }
  }

  useEffect(() => {
    handleDaySelect(selected)
    setDate(selected)
  }, [selected])

  return (
    <DatePickerContainer>
      <ToggleOptionsButton
        activeCondition={isDatePickerOpen}
        innerText={buttonValue}
        action={() => setIsDatePickerOpen(!isDatePickerOpen)}
      >
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3079 2.41333H16.6829V1.53833C16.6829 1.30627 16.5907 1.08371 16.4266 0.919612C16.2625 0.755517 16.04 0.66333 15.8079 0.66333C15.5759 0.66333 15.3533 0.755517 15.1892 0.919612C15.0251 1.08371 14.9329 1.30627 14.9329 1.53833V2.41333H6.18292V1.53833C6.18292 1.30627 6.09073 1.08371 5.92664 0.919612C5.76255 0.755517 5.53999 0.66333 5.30792 0.66333C5.07586 0.66333 4.8533 0.755517 4.6892 0.919612C4.52511 1.08371 4.43292 1.30627 4.43292 1.53833V2.41333H1.80792C1.34379 2.41333 0.898674 2.5977 0.570485 2.92589C0.242297 3.25408 0.0579224 3.6992 0.0579224 4.16333V21.6633C0.0579224 22.1275 0.242297 22.5726 0.570485 22.9008C0.898674 23.229 1.34379 23.4133 1.80792 23.4133H19.3079C19.7721 23.4133 20.2172 23.229 20.5454 22.9008C20.8735 22.5726 21.0579 22.1275 21.0579 21.6633V4.16333C21.0579 3.6992 20.8735 3.25408 20.5454 2.92589C20.2172 2.5977 19.7721 2.41333 19.3079 2.41333ZM4.43292 4.16333V5.03833C4.43292 5.27039 4.52511 5.49295 4.6892 5.65705C4.8533 5.82114 5.07586 5.91333 5.30792 5.91333C5.53999 5.91333 5.76255 5.82114 5.92664 5.65705C6.09073 5.49295 6.18292 5.27039 6.18292 5.03833V4.16333H14.9329V5.03833C14.9329 5.27039 15.0251 5.49295 15.1892 5.65705C15.3533 5.82114 15.5759 5.91333 15.8079 5.91333C16.04 5.91333 16.2625 5.82114 16.4266 5.65705C16.5907 5.49295 16.6829 5.27039 16.6829 5.03833V4.16333H19.3079V7.66333H1.80792V4.16333H4.43292ZM19.3079 21.6633H1.80792V9.41333H19.3079V21.6633ZM15.1145 12.2943C15.1958 12.3755 15.2604 12.472 15.3044 12.5783C15.3484 12.6845 15.3711 12.7983 15.3711 12.9133C15.3711 13.0283 15.3484 13.1422 15.3044 13.2484C15.2604 13.3546 15.1958 13.4511 15.1145 13.5324L9.86448 18.7824C9.78322 18.8637 9.68672 18.9283 9.58049 18.9723C9.47427 19.0164 9.36041 19.039 9.24542 19.039C9.13043 19.039 9.01657 19.0164 8.91035 18.9723C8.80413 18.9283 8.70762 18.8637 8.62636 18.7824L6.00136 16.1574C5.83717 15.9932 5.74494 15.7705 5.74494 15.5383C5.74494 15.3061 5.83717 15.0835 6.00136 14.9193C6.16554 14.7551 6.38823 14.6628 6.62042 14.6628C6.85262 14.6628 7.0753 14.7551 7.23949 14.9193L9.24542 16.9263L13.8764 12.2943C13.9576 12.2129 14.0541 12.1484 14.1603 12.1043C14.2666 12.0603 14.3804 12.0376 14.4954 12.0376C14.6104 12.0376 14.7243 12.0603 14.8305 12.1043C14.9367 12.1484 15.0332 12.2129 15.1145 12.2943Z"
            fill="#303030"
          />
        </svg>
      </ToggleOptionsButton>

      {isDatePickerOpen && (
        <CalendarContainer>
          <DayPicker
            mode="single"
            disabled={datesNotAvailable}
            selected={selected}
            onSelect={setSelected}
            fromDate={startDate}
            showOutsideDays
            locale={es}
            formatters={{ formatCaption }}
            modifiersClassNames={{
              selected: 'selected-date',
              today: 'today-date',
            }}
            classNames={{
              nav_button_next: 'nav-button-next',
              nav_button_previous: 'nav-button-previous',
              caption: 'caption',
              nav: 'nav',
            }}
          />
        </CalendarContainer>
      )}
    </DatePickerContainer>
  )
}
