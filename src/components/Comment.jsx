import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    
    <div className={styles.comment}> 
      <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4D03AQFtIew6ZsLCJw/profile-displayphoto-shrink_800_800/0/1659371939155?e=1665619200&v=beta&t=lsC4aoOThrr_QFEMrbHUutyeXSV77V3ht0Lp7eX9lcA" />
        
      <div className={styles.commentBox}> 
        <div className={styles.commentContent}> 
          <header>
            <div className={styles.authorAndTime}> 
              <strong>Matheus Grossi</strong>
              <time title="03 de agosto de 2022"dateTime="2022-08-03 11:07:38">Cerca de 1 hora atrás
              </time>
     
            </div>
      
            <button title="Deletar comentário"> 
            <Trash size={24} />
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