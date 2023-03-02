// props: {author: '', content: ''}

import styles from './Post.module.css';

export function Post(props) {
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/rafaasimi.png" alt="Rafael Simionato" />
                
                    <div className={styles.authorInfo}>
                      <strong>Rafael Simionato</strong>
                      <span>Engenheiro de Software</span>
                    </div>
                </div>
                
                <time title="01 de Março de 2023" dateTime="2023-03-01 20:00:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
              <p>Fala galeraa 👋</p>
              <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
              <p><a href=""> jane.design/doctorcare</a></p>
              <p>
              <a href="">#novoprojeto</a>{' '}
              <a href="">#nlw</a>{' '}
              <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}