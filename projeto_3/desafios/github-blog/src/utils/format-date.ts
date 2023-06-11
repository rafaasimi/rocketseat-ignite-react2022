import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function FormatDate(date: string): string {
  if(!date) {
    return date
  }
  
  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  });
}
