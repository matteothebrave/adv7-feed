// Importação tradicional com chaves. 
// Para especificar o que está importando 
import { Header } from './components/header';
import { Comment } from './components/Comment'
import { Post } from './components/Post'
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';


// essas são as propriedades para o componente 
// author: { avatarUrl: "", name: "", role: "" }
// publishedAt: Date
// content: String


const posts = [
  {
    id:1, 
    author: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylkNqv1vPGrQ71ycI7WeX_Pz-DXWwPolVR4H9OyiGonR7GvoBQUfOS6N3Sv3lCF5wYME&usqp=CAU',
      name: 'Pastor Branga',
      role: 'Ministério Jovem'
    },
    content: [      
      { type: 'paragraph', content: 'Fala povo abençoado!!' },
      { type: 'paragraph', content: 'Logo menos iremos ter mais uma ação social em comunidade !!!', },
      { type: 'paragraph', content: 'Teremos uma doação de sangue em novembro.', },
      { type: 'paragraph', content: 'Fiquem antenados para mais informações.', },
      { type: 'paragraph', content:  '👉 Siga nosso insta', },
      { type: 'link', content: "instagram.com/seliga.bro",  },   
   ],
   publishedAt: new Date('2022-08-08 13:52:33'),
  }, 
{
  id:2, 
    author: {
      avatarUrl: 'https://cdn.britannica.com/71/198171-050-23937D75/Miniature-manuscript-illumination-Isaiah-The-Siegburg-Lectionary.jpg',
      name: 'Isaiah The Prophet',
      role: 'Membro do Seliga.BRO'
    },
    content: [      
      { type: 'paragraph', content: 'Fala povo de Deuss', },
      { type: 'paragraph', content: 'Vamos ter ação do dia das crianças em!! fiquem ligados', },
      { type: 'paragraph', content: 'Estamos arrecadando brinquedos,doces e etc', },
      { type: 'paragraph', content: 'Para doações, é só levar à igreja central, ou pelo instagram', },
      { type: 'paragraph', content:  '👉 Siga nosso insta', },
      { type: 'link', content: 'instagram.com/seliga.bro' },   
   ],
   publishedAt: new Date('2022-05-03 20:00:00'),
  }, 
]

//ITERAÇÃO = CRIAR ESTRUTURA DE REPETIÇÃO SEMPRE USANDO O .map 

export function App() {

  return (
    <div>
      <Header />
       <div className={styles.wrapper}>
          <Sidebar />
        <main>
                {posts.map(post => {
                 return (
                 
                 <Post 
                    key={post.content}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}


                 />)
                })}
        </main>
    
       </div>
     
    </div>
  )
}

