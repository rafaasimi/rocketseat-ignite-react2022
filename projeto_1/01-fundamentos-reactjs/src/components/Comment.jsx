import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({comment, onDeleteComment}) {
  function handleDeleteComment() {
    onDeleteComment(comment.id)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Simionato</strong>
              <time title="01 de Março de 2023" dateTime="2023-03-01 20:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment}title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
