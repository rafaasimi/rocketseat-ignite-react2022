import { v4 as uuid } from 'uuid';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { generateTaskList } from '../tasks';
import { EmptyList } from './EmptyList';
import { PlusCircle } from 'phosphor-react';

import styles from './CreateTaskForm.module.css';
import { TaskList } from './TaskList';

export function CreateTaskForm() {
  const [taskList, setTaskList] = useState(generateTaskList());
  const [ordenedTaskList, setOrdenedTaskList] = useState(taskList);
  const [newTaskText, setNewTaskText] = useState('');
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  useEffect(() => {
    countCompletedTasks();
    orderTaskListByIsCompleted();
  }, [taskList])
  
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function createNewTask(event: FormEvent) {
    event.preventDefault();
    setTaskList([
      {
        id: uuid(),
        content: newTaskText,
        isCompleted: false,
      },
      ...ordenedTaskList,
    ]);

    orderTaskListByIsCompleted();
  }

  function handleMarkTaskAsDone(idTask: string) {
    setTaskList(
      ordenedTaskList.map((task) => {
        if (task.id === idTask) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }

        return task;
      })
    );
  }

  function handleDeleteTask(idTask: string) {
    setTaskList(taskList.filter(task => task.id !== idTask));
  }

  function countCompletedTasks() {
    setCompletedTaskCount(taskList.filter(task => task.isCompleted === true).length);
  }

  function orderTaskListByIsCompleted() {
    setOrdenedTaskList(taskList.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)))
  }

  return (
    <>
      <form onSubmit={createNewTask} className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>

      <div className={styles.taskStatus}>
        <div className={styles.taskCreatedCount}>
          <p>Tarefas criadas</p>
          <span>{taskList.length}</span>
        </div>
        <div className={styles.taskDoneCount}>
          <p>Tarefas concluidas</p>
          <span>
            {taskList.length > 0 ? `${completedTaskCount} de ${taskList.length}` : 0}
          </span>
        </div>
      </div>

      {taskList.length > 0 ? (
        <TaskList taskList={ordenedTaskList} onMarkTaskAsDone={handleMarkTaskAsDone} onDeleteTask={handleDeleteTask}/>
      ) : (
        <EmptyList />
      )}
    </>
  );
}
