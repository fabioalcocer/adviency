'use client'

import { useState } from 'react'

function WishList () {
  const [gifts, setGifts] = useState(['Tenis', 'Mochila', 'Taza'])

  return (
    <div className='bg-white text-slate-900 mx-auto max-w-sm p-6 flex flex-col gap-4'>
      <h1 className='text-4xl text-center text-red-500 font-semibold'>
        Regalos
      </h1>

      <form className='flex gap-2'>
        <input
          type='text'
          className='bg-white border-2 border-slate-800'
        />
        <button
          className='bg-red-500 px-2 py-1'
          type='submit'
          value='add'
        >
          Add
        </button>
      </form>

      <div>
        <ul className='text-xl'>
          {gifts.map((gift, index) => (
            <li key={index}>{gift}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WishList
