import { Link } from 'react-router-dom'
import styles from './Art.module.css'

function Art({src, alt, title, link}) {
  return (
    <div className={styles.art}>
      <img className={styles.image} src={src} alt={alt} />
      <h2>{title}</h2>
      <Link to={link}>
        <img 
          className={styles.exchange_art} 
          src='/exchangeart.svg' 
          alt='[exchange.art]' 
        />
      </Link>
    </div>
  )
}

export default Art