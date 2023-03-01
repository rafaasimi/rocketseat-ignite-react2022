import { Header } from './components/Header';
import { Post } from './Post';

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael Simionato"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit quia cum voluptatem provident officiis."
          />
          <Post
            author="Diego Fernandes"
            content="Novo post adicionado. Muito legal."
          />
        </main>
      </div>
    </>
  );
}
