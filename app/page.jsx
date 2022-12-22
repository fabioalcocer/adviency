import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={inter.className}>
      <h1 className={styles.main}>Hello World</h1>
    </main>
  )
}
