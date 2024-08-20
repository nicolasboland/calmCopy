import { useEffect, useState } from "react"
import { format } from "date-fns"
import { DateFormatter, DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import es from "date-fns/locale/es"
import { CalendarContainer, DatePickerContainer, FormLabel } from "./styled"
import ToggleOptionsButton from "@/components/Atoms/ToggleOptionsButton/ToggleOptionsButton"
import { IProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import { CalendarioSvg } from "@/utils/Icons"

export const InputDatePicker = ({
  startDate,
  active,
  disableDates,
  setDate = () => {}
}: IProps) => {
  const [selected, setSelected] = useState<Date>()
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [buttonValue, setButtonValue] = useState("")

  const datesNotAvailable = disableDates?.map(date => new Date(date.holiday_date+"T00:00:00-03:00"))

  useEffect(() => {
    setIsDatePickerOpen(active)
  }, [active])

  const formatCaption: DateFormatter = (date, options) => {
    const formattedMonth = format(date, "LLLL yyyy", {
      locale: options?.locale
    })
    return (
      <>{formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1)}</>
    )
  }

  const handleDaySelect = (date: Date | undefined) => {
    setSelected(date)
    if (date) {
      setButtonValue(format(date, "dd/MM/yy"))
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
    <>
      <FormLabel>
        <Text fontSize="1rem">Fecha preferida de entrega</Text>
      </FormLabel>
      <DatePickerContainer>
        <ToggleOptionsButton
          activeCondition={isDatePickerOpen}
          innerText={buttonValue}
          action={() => setIsDatePickerOpen(!isDatePickerOpen)}
        >
          <CalendarioSvg />
        </ToggleOptionsButton>

        {isDatePickerOpen && (
          <CalendarContainer>
            <DayPicker
              mode="single"
              selected={selected}
              disabled={datesNotAvailable}
              onSelect={setSelected}
              fromDate={startDate}
              showOutsideDays
              locale={es}
              formatters={{ formatCaption }}
              modifiersClassNames={{
                selected: "selected-date",
                today: "today-date"
              }}
              classNames={{
                nav_button_next: "nav-button-next",
                nav_button_previous: "nav-button-previous",
                caption: "caption",
                nav: "nav"
              }}
            />
          </CalendarContainer>
        )}
      </DatePickerContainer>
    </>
  )
}
