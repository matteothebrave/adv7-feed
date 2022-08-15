import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Comment({ content, onDeleteComment }) {
        const [likeCount, setLikeCount] = useState(0);

        function handleDeleteComment() {
                onDeleteComment(content)
        };
          
        function handleLikeComment() {
          let likeCount = 0; 
          setLikeCount(likeCount + 1)
          if (likeCount = 2) {
            return 
          }
        
       }

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
      
            <button onClick={handleDeleteComment} title="Deletar comentário"> 
            <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />   
            Aplaudir           
            <span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  
  )
}