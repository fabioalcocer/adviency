'use client'

import { useState } from 'react'

function WishList () {
  const [gift, setGift] = useState({
    id: +new Date(),
    name: '',
    quantity: ''
  })

  const [gifts, setGifts] = useState([
    { id: +new Date(), name: 'Tenis', quantity: 1 }
  ])

  const createNewGift = (gift) => {
    if (!gifts.find((g) => g.name === gift.name)) {
      setGifts([
        ...gifts,
        { id: +new Date(), name: gift.name, quantity: gift.quantity }
      ])
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)

    const { name, value, checked, type } = e.target

    setGift({
      ...gift,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.name.value.trim()) return

    createNewGift(gift)

    setGift({
      id: +new Date(),
      name: '',
      quantity: 1
    })
  }

  const handleDelete = (id) => {
    setGifts((gifts) => gifts.filter((gift) => gift.id !== id))
  }

  return (
    <div className='bg-white text-slate-900 mx-auto max-w-sm p-6 flex flex-col gap-4 rounded-md'>
      <h1 className='text-4xl text-center text-red-500 font-semibold'>
        Regalos
      </h1>

      <form className='flex gap-2' onSubmit={handleSubmit}>
        <input
          value={gift.name}
          name='name'
          placeholder='Enter gift name'
          type='text'
          onChange={handleChange}
          className='peer w-full rounded-md border border-slate-300 bg-white p-2 text-sm placeholder-slate-600/80
          focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
        />
        <input
          value={gift.quantity}
          type='number'
          name='quantity'
          placeholder='1'
          onChange={handleChange}
          className='w-10 peer rounded-md border border-slate-300 bg-white p-2 text-sm placeholder-slate-600/80
          focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
        />
        <button
          className='bg-red-500 px-2 py-1 text-white font-semibold rounded-sm flex-1'
          type='submit'
        >
          Add
        </button>
      </form>

      <div>
        <ul className='text-xl flex flex-col gap-2'>
          {gifts.length
            ? (
                gifts.map((gift, index) => (
                  <div
                    className='flex w-full rounded-sm overflow-hidden'
                    key={index}
                  >
                    <li className='flex justify-between bg-slate-50 items-center pl-2 py-1 w-full'>
                      <p className='font-semibold flex items-center'>
                        {gift.name}{' '}
                        <span className='text-slate-700 text-base ml-3'>
                          (x {gift.quantity})
                        </span>
                      </p>
                    </li>
                    <button
                      className='p-2 py-0 grid place-content-center bg-red-500 text-white'
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
        className='bg-red-500 text-white p-2 rounded-md hover:bg-red-400'
        onClick={() => setGifts([])}
      >
        Delete All
      </button>
    </div>
  )
}

export default WishList
