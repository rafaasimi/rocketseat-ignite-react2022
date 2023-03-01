import { Post } from './Post';

export function App() {
  return (
    <>
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
