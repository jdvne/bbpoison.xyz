import Art from '../components/Art'
import { Link } from 'react-router-dom'
import home from '../content/featured/home'
import styles from './Home.module.css'

function Home() {
  let art = home.artworks.map((a) => require(`../content/art/${a}.json`))

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
        <Link to='a' className={styles.link}>
          <h2>▸▸ gallery</h2>
        </Link>
      </div>
      <div className={styles.column_2}>
        { art.map(({image, link, title}, index) => (
          <Art key={index} src={image} alt={title} title={title} link={link} />
        ))}
      </div>
    </main>
  )
}

export default Home