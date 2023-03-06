import { FormEvent, useState } from 'react';
import { tasks } from '../tasks.json';
import { EmptyList } from './EmptyList';
import { PlusCircle } from 'phosphor-react';

import styles from './CreateTaskForm.module.css';
import { TaskList } from './TaskList';

export function CreateTaskForm() {
  const [taskList, setTaskList] = useState(tasks);

  function createNewTask(event: FormEvent) {
    event.preventDefault();
    console.log('Criei nova tarefa');
  }

  function handleMarkTaskAsDone() {
    console.log('Conclui a tarefa')
  }

  function handleDeleteTask() {
    console.log('Removi a tarefa')
  }

  return (
    <>
      <form onSubmit={createNewTask} className={styles.form}>
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button type="submit">
          Criar
          <PlusCircle size={"1rem"} weight="bold"/>
        </button>
      </form>
      {taskList.length > 0 ? <TaskList />: <EmptyList />}
    </>
  );
}
