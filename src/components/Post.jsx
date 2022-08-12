import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';




export function Post({ author, publishedAt, content}) {
// estado = variaveis que eu quero que o componente monitore 
  const [comments, setComments] = useState([
    'Post muito bacana!'
    
  ])

const [newCommentText, setNewCommentText] = useState('')


const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
})
          //Function to SUBMIT the Comment 
    function handleCreateNewComment() {
      event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() { 
        setNewCommentText(event.target.value);
  }

    function deleteComment(commentsToDelete) {
          const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentsToDelete;
          })

          setComments(commentsWithoutDeletedOne)
    }


  return (
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong> 
              <span>{author.role}</span>
            </div>
          </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
          </time>
        
      </header>
              
                                    
      <div className={styles.content}>
            {content.map(line => {
           if (line.type === 'paragraph')   { 
                return <p key={line.content}>{line.content}</p> }
              else if (line.type === 'link') {
                return <p key={line.content}><a href="">{line.content}</a></p>;
              } 
              })}
        </div>
      

      <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

    <textarea 
        name="comment"
        placeholder="Escreva um comentário"
        onChange={handleNewCommentChange}
        value={newCommentText}
         />

       <footer>
        <button type="submit">Publicar</button>
          </footer> 
      </form>
     <div className={styles.commentList}>
      {comments.map(comment => {
        return (<Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} />)
      })}
      </div>

    </article>
  )
}
