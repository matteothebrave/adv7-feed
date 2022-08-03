import styles from './Post.module.css'



export function Post() {
  return (
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://www.w3schools.com/howto/img_avatar.png"/>
            <div className={styles.authroInfo}>
              <strong>Matheus Grossi F.T</strong> <br />
              <span> Minstério Jovem </span>
            </div>
          </div>

        <time title="03 de agosto de 2022"dateTime="2022-08-03 11:07:38">Publicado há 1 hora</time>
      </header>

        <div className={styles.content}>
          <p>Fala Galera {' '}👋👋👋 </p>  
          <p>Logo menos iremos ter mais uma ação social em comunidade !!! </p>
          <p> Teremos uma doação de sangue em setembro.</p>
          <p> Fiquem antenados para mais informações.</p>
          <p> 👉 Sigam nosso insta </p>
          <p> 👉 <a href="">instagram.com/seliga.bro</a></p>
        </div>


    </article>
  )
}