import styles from './Header.module.css'

import logoImg from '../assets/logo-todo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="ToDo List" title="ToDo List"/>
    </header>
  )
}