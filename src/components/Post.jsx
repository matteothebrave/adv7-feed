import styles from './Post.module.css'



export function Post() {
  return (
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/C4D03AQFtIew6ZsLCJw/profile-displayphoto-shrink_800_800/0/1659371939155?e=1665014400&v=beta&t=kz6HBu5jWHhJ1I18OJYhdPoxQCzWTLVBrtOaHSMWwww"/>
            <div className={styles.authroInfo}>
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


    </article>
  )
}