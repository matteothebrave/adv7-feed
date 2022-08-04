import { Comment } from '../components/Comment'
import styles from './Post.module.css'



export function Post() {
  return (
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/C4D03AQFtIew6ZsLCJw/profile-displayphoto-shrink_800_800/0/1659371939155?e=1665014400&v=beta&t=kz6HBu5jWHhJ1I18OJYhdPoxQCzWTLVBrtOaHSMWwww"/>
            <div className={styles.authorInfo}>
              <strong>Matheus Grossi</strong> 
              <span> MJ </span>
            </div>
          </div>

        <time title="03 de agosto de 2022"dateTime="2022-08-03 11:07:38">Publicado há 1 hora</time>
      </header>
          
        <div className={styles.content}>
          <p>Fala Galera {' '}👋👋👋 </p>  
          <p>Logo menos iremos ter mais uma ação social em comunidade !!! </p>
          <p> Teremos uma doação de sangue em novembro.</p>
          <p> Fiquem antenados para mais informações.</p>
          <p> 👉 Sigam nosso insta </p>
          <p> 👉 <a href="">instagram.com/seliga.bro</a></p>
        </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário" />

       <footer>
        <button type="submit">Publicar</button>
          </footer> 
      </form>
     
       
      <div className={styles.commentList}>  
          
       </div>

    </article>
  )
}
