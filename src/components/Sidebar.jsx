import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
      src="https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://www.w3schools.com/howto/img_avatar.png"/>
        <strong>Matheus Grossi</strong>
        <span>Ministério de missões</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}