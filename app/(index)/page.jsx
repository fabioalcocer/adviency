import { Inter } from '@next/font/google'
import WishList from './components/WishList'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main
      className={`${inter.className} flex items-center min-h-screen bg-emerald-800 px-4`}
    >
      <WishList />
    </main>
  )
}
