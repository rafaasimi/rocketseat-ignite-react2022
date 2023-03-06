import styles from './EmptyList.module.css';

import { ClipboardText } from 'phosphor-react';

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <ClipboardText size={'3.5rem'}/>

      <div className={styles.content}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}