import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'

export function App() {
  return (
    <>
    <Header />
      <h1>Hello World</h1>
      <Post
        author="Rafael Simionato"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit quia cum voluptatem provident officiis."
      />
      <Post
        author="Diego Fernandes"
        content="Novo post adicionado. Muito legal."
      />
    </>
  );
}
