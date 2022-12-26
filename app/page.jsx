import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <main
        className={`${inter.className} flex items-center min-h-screen bg-emerald-800`}
      >
        <div className='bg-white text-slate-900 mx-auto max-w-sm p-4 flex flex-col gap-4'>
          <h1 className='text-4xl text-center text-red-500 font-semibold'>
            Regalos
          </h1>
          <div>
            <ul className='text-xl'>
              <li>Tenis</li>
              <li>Mochila</li>
              <li>Tazita</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
