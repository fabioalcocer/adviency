'use client'

import { useState } from 'react'

function WishList () {
  const [giftName, setGiftName] = useState('')

  const [gifts, setGifts] = useState([
    { name: 'Tenis', done: true }
  ])

  const createNewGift = (giftName) => {
    if (!gifts.find((task) => task.name === giftName)) {
      setGifts([...gifts, { name: giftName, done: false }])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewGift(giftName)
    setGiftName('')
  }

  return (
    <div className='bg-white text-slate-900 mx-auto max-w-sm p-6 flex flex-col gap-4'>
      <h1 className='text-4xl text-center text-red-500 font-semibold'>
        Regalos
      </h1>

      <form className='flex gap-2' onSubmit={handleSubmit}>
        <input
          value={giftName}
          placeholder='Enter gift name'
          type='text'
          onChange={(e) => setGiftName(e.target.value)}
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
            <li key={index}>{gift.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WishList
