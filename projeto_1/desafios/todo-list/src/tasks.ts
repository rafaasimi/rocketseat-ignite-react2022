import { v4 as uuid } from 'uuid';

interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function generateTaskList(): ITask[] {
  return [
    {
      id: uuid(),
      content: 'Ir ao mercado comprar comida.',
      isCompleted: true,
    },
    {
      id: uuid(),
      content: 'Ler um livro sobre investimentos.',
      isCompleted: false,
    },
    {
      id: uuid(),
      content: 'Estudar mais sobre React.',
      isCompleted: false,
    },
  ];
}
