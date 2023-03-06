import { Trash } from 'phosphor-react';

import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <ul>
        <li className={styles.taskItem}>
          <input type="checkbox"/>
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <button>
            <Trash size={'1.5rem'}/>
          </button>
        </li>

        <li className={styles.taskItem}>
          <input type="checkbox"/>
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <button>
            <Trash size={'1.5rem'}/>
          </button>
        </li>

        <li className={styles.taskItem}>
          <input type="checkbox"/>
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <button>
            <Trash size={'1.5rem'}/>
          </button>
        </li>
      </ul>
    </div>
  )
}