import Art from '../components/Art'
import home from '../content/pages/home'
import styles from './All.module.css'

function All() {
  let art = home.artworks.map((a) => require(`../content/art/${a}.json`))

  return (
    <main id={styles.all}>
      <div id={styles.column}>
        { art.map(({image, link, title}, index) => (
          <Art key={index} src={image} alt={title} title={title} link={link} />
        ))}
      </div>
    </main>
  )
}

export default All