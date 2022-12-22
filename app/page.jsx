import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={inter.className}>
      <div className={styles.container}>
        <h1 className={styles.title__page}>Regalos</h1>
        <div>
          <ul>
            <li>Tenis</li>
            <li>Mochila</li>
            <li>Tazita</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
