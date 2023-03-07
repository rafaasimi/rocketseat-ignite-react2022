import { Trash } from 'phosphor-react';

import styles from './TaskList.module.css';

interface TaskListProps {
  taskList: Task[];
  onMarkTaskAsDone: (idTask: string) => void;
  onDeleteTask: (idTask: string) => void;
}

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function TaskList(props: TaskListProps) {
  return (
    <div className={styles.taskList}>
      <ul>
        {props.taskList.map((task) => {
          return (
            <li className={styles.taskItem} key={task.id}>
              <input type="checkbox" checked={task.isCompleted} onChange={() => props.onMarkTaskAsDone(task.id)}/>
              <p>{task.content}</p>
              <button onClick={() => props.onDeleteTask(task.id)}>
                <Trash size={24} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
