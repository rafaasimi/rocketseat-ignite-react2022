import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string

export function App() {
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/rafaasimi.png',
        name: 'Rafael Simionato',
        role: 'Engenheiro de Software'
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: 'github.com/rafaasimi'}
      ],
      publishedAt: new Date('2023-03-01 09:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat'
      },
      content: [
        {type: 'paragraph', content: 'Falaaaa DEV! 👋'},
        {type: 'paragraph', content: 'Se liga que vem mais uma NLW esse mês'},
        {type: 'link', content: 'github.com/diego3g'}
      ],
      publishedAt: new Date('2023-03-03 09:00:00')
    }
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
