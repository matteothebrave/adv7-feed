// Importação tradicional com chaves. 
// Para especificar o que está importando 
import { Header } from './components/header';
import { Post } from './components/Post'
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />
       <div className={styles.wrapper}>
          <Sidebar />
        <main>
        <Post 
        author="Diego Fernandes" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et minima quos est quas odio pariatur consequuntur modi, aperiam, atque beatae eius repellendus alias quia expedita. Corporis fugiat quibusdam suscipit?" 
        />
        <Post 
        author="Matheus Grossi"
        content="Loremzão Ipsummmmm"/>

        </main>
    
       </div>
     
    </div>
  )
}

