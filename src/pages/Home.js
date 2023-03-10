import Art from '../components/Art'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import home from '../content/pages/home'
import styles from './Home.module.css'

function Home() {
  let art = home.artworks.map((a) => require(`../content/art/${a}.json`))

  return (
    <main id={styles.home}>
      <div className={styles.column_1}>
        <h1 className={styles.title}>BBPOISON</h1>
        <ReactMarkdown>
          {home.bio}
        </ReactMarkdown>
        <Link to='a' className={styles.link}>
          <h2>▸▸ gallery</h2>
        </Link>
      </div>
      <div className={styles.column_2}>
        <h1 className={styles.title_mobile}>BBPOISON</h1>
        { art.map(({image, link, title}, index) => (
          <Art key={index} src={image} alt={title} title={title} link={link} />
        ))}
      </div>
    </main>
  )
}

export default Home