import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/edilaine-as.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Edilaine Santos</strong>
                            <time title='19 de julho às 20:00h' dateTime='2023-07-19 20:00:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}