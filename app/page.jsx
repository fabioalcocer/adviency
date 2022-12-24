import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex items-center min-h-screen bg-emerald-800`}>
      <div className='bg-white text-slate-900 mx-auto max-w-sm p-4'>
        <h1 className='text-3xl text-center'>Regalos</h1>
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
