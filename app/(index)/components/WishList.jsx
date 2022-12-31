'use client'

import { useState } from 'react'

function WishList () {
  const [giftName, setGiftName] = useState('')

  const [gifts, setGifts] = useState([
    { id: +new Date(), name: 'Tenis', done: true }
  ])

  const createNewGift = (giftName) => {
    if (!gifts.find((task) => task.name === giftName)) {
      setGifts([
        ...gifts,
        { id: +new Date(), name: giftName, done: false }
      ])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!e.target.name.value.trim()) return

    createNewGift(giftName)
    setGiftName('')
  }

  const handleDelete = (id) => {
    setGifts((gifts) => gifts.filter((gift) => gift.id !== id))
  }

  return (
    <div className='bg-white text-slate-900 mx-auto max-w-sm p-6 flex flex-col gap-4'>
      <h1 className='text-4xl text-center text-red-500 font-semibold'>
        Regalos
      </h1>

      <form className='flex gap-2' onSubmit={handleSubmit}>
        <input
          value={giftName}
          required
          name='name'
          placeholder='Enter gift name'
          type='text'
          onChange={(e) => setGiftName(e.target.value)}
          className='bg-white border-2 border-slate-800 pl-2'
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
          {gifts.length
            ? (
                gifts.map((gift, index) => (
                  <div
                    className='flex justify-between bg-slate-100 items-center pl-2 py-1'
                    key={index}
                  >
                    <li>{gift.name}</li>
                    <button
                      className='p-2 h-8 grid place-content-center bg-red-600'
                      onClick={() => handleDelete(gift.id)}
                    >
                      X
                    </button>
                  </div>
                ))
              )
            : (
              <p>No hay regalos ¡Agrega alguno!</p>
              )}
        </ul>
      </div>

      <button
        className='bg-red-600 w-full text-white p-2'
        onClick={() => setGifts([])}
      >
        Delete All
      </button>
    </div>
  )
}

export default WishList
