import { parseISO, format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';


export const formatDateTo = (value: string | Date, datePattern = 'P') => {
  const convertedValue = typeof value === 'string' ? parseISO(value) : value;

  return format(convertedValue, datePattern, { locale: ptBr });
};
