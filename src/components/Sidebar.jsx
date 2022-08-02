import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
      src="https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/C4D03AQFtIew6ZsLCJw/profile-displayphoto-shrink_800_800/0/1659371939155?e=1665014400&v=beta&t=kz6HBu5jWHhJ1I18OJYhdPoxQCzWTLVBrtOaHSMWwww"/>

        <strong>Matheus Grossi</strong>
        <span>Ministério de missões</span>
      </div>

      <footer>
        <a href='#'>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}