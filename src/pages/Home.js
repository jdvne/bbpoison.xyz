import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Art({src, alt, title, link}) {
  return (
    <div className={styles.art}>
      <img className={styles.image} src={src} alt={alt} />
      <h2>{title}</h2>
      <a href={link}>
        <img 
          className={styles.exchange_art} 
          src='/exchangeart.svg' 
          alt='[exchange.art]' 
        />
      </a>
    </div>
  )
}

function Home() {
  return (
    <main id={styles.home}>
      <div className={styles.column_1}>
        <h1 className={styles.title}>BBPOISON</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          nunc eu nisl aliquet, nec aliquet nisl aliquam. Donec euismod, nunc
          euismod aliquam, nunc nisl aliquam nunc, eu aliquam nisl nisl eu
        </p>
        <p>
          euismod nunc eu nisl aliquet, nec aliquet nisl aliquam. Donec euismod,
          euismod nunc eu nisl aliquet, nec aliquet nisl aliquam. Donec euismod          
        </p>
        <Link to='/gallery' className={styles.link}>
          <h2>▸▸ gallery</h2>
        </Link>
      </div>
      <div className={styles.column_2}>
        <Art 
          src="https://images-cdn.exchange.art/NlmW7DL1xRCxD5vVt3t0PtcQHGPrzMwu7J8ReSZJ_G8?ext=fastly%26width=1000%26optimize=medium%26auto=avifwebp" 
          alt="*16 missed calls*"
          title="*16 missed calls*"
          link="https://exchange.art/single/Ay6FDCa2ZFqDYMMsJ27pp9QjAJveYxXRwLwRkarxa4qy"
          />
        <Art 
          src="https://images-cdn.exchange.art/bdUfwdjN-DjfrVVOSnowR92oIH7C7JR6zV5mVnZ-ILI?ext=fastly%26width=1000%26optimize=medium%26auto=avifwebp" 
          alt="A Nine to Five" 
          title="A Nine to Five"
          link="https://exchange.art/single/FjJYGMo2WcBV9oGTE3EuVnFvv3MeS5gJnuVrGPLyBJsg"
          />
      </div>
    </main>
  )
}

export default Home