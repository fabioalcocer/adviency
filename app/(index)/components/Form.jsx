'use client'

import { useState } from 'react'

function Form ({
  createNewGift,
  setShowModal,
  editGift,
  setEditGift,
  toEditGift
}) {
  const [gift, setGift] = useState({
    id: +new Date(),
    name: editGift?.name ?? '',
    image: editGift?.image ?? '',
    quantity: editGift?.quantity ?? 1,
    receiver: editGift?.receiver ?? ''
  })

  let editing = false

  if (editGift) editing = true

  const handleChange = (e) => {
    const { name, value } = e.target

    editing
      ? setEditGift({
        ...editGift,
        [name]: value
      })
      : setGift({
        ...gift,
        [name]: value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editing) return handleEdit()

    handleAdd()
  }

  const handleAdd = () => {
    console.log('se uso agregar')

    if (!gift.name.trim() || gift.quantity < 1) return

    createNewGift(gift)
    setShowModal(false)

    setGift({
      id: +new Date(),
      name: '',
      image: '',
      quantity: 1
    })
  }

  const handleEdit = () => {
    console.log('se uso editar')

    if (!gift.name.trim() || gift.quantity < 1) return

    toEditGift(editGift)
    setShowModal(false)
  }

  return (
    <form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
      <input
        value={editing ? editGift.name : gift.name}
        name='name'
        type='text'
        placeholder='Enter gift name'
        onChange={handleChange}
        autoComplete='off'
        className='peer w-full rounded-md border border-slate-300 bg-white p-2 text-sm placeholder-slate-600/80
          focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
      />
      <input
        value={editing ? editGift.image : gift.image}
        name='image'
        type='text'
        placeholder='Enter url'
        onChange={handleChange}
        className='peer w-full rounded-md border border-slate-300 bg-white p-2 text-sm placeholder-slate-600/80
          focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
      />
      <div className='flex gap-5'>
        <input
          value={editing ? editGift.receiver : gift.receiver}
          name='receiver'
          type='text'
          placeholder='Enter receiver'
          onChange={handleChange}
          className='peer w-full rounded-md border border-slate-300 bg-white p-2 text-sm placeholder-slate-600/80
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
        />
        <input
          value={editing ? editGift.quantity : gift.quantity}
          name='quantity'
          type='number'
          placeholder='1'
          onChange={handleChange}
          className='w-10 peer rounded-md border border-slate-300 bg-white p-2 text-sm placeholder-slate-600/80
        focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
        />
      </div>
      <div className='flex items-center justify-between gap-8'>
        <button
          className='pl-1 pr-2 py-1 bg-slate-100 text-slate-600 font-semibold rounded-sm flex-1'
          onClick={() => setShowModal(false)}
        >
          Close
        </button>

        <button
          className='bg-red-500 px-2 py-1 text-white font-semibold rounded-sm flex-1'
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default Form
