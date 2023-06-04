import { format } from 'date-fns';

export const formatDate = (date: Date) => {
  const parsedDate = new Date(date);
  return format(parsedDate, 'dd/MM/yyyy');
};
