
import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { CreateTaskForm } from './components/CreateTaskForm';

function App() {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <CreateTaskForm />
      </main>
    </>
  )
}

export default App
