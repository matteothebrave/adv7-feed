import styles from './Header.module.css'
import igniteLogo from './assets/ignite-logo.svg'
import broLogo from './assets/bro-logo.svg'


export function Header() {
  return (    
    
        <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo Adventista" />  
        <img src={broLogo} alt="logo do mj" />  
        </header>
  );
}

