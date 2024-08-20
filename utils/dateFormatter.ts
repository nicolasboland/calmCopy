import { format, Locale } from 'date-fns';
import { es } from "date-fns/locale"

export const dateFormatter = (date: Date) => {
    const esLocale:  Locale= es;
    
     return format(date, 'EEEE dd/MM', { locale: esLocale })
}