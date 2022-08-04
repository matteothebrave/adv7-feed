import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/matteothebrave.png"/>
        
      <div className={styles.commentBox}> 
        <div className={styles.commentContent}> 
          <header>
            <div className={styles.authorAndTime}> 
              <strong>Matheus Grossi</strong>
              <time title="03 de agosto de 2022"dateTime="2022-08-03 11:07:38">Cerca de 1 hora atrás
              </time>
     
            </div>
      
            <button title="Deletar comentário"> 
            <Trash size={20} />
            </button>
          </header>

          <p>Muito bom devon, parabens !!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />   
            Aplaudir           
            <span>20</span>
            </button>
        </footer>
      </div>
    </div>
    
  )
}