/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Form from './Form'
import Modal from './Modal'

const isImage = (url) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
}

function WishList () {
  const [showModal, setShowModal] = useState(false)
  const [gifts, setGifts] = useLocalStorage('gifts', [])
  const [editGift, setEditGift] = useState()

  const createNewGift = (gift) => {
    if (!gifts.find((g) => g.name === gift.name)) {
      setGifts([...gifts, gift])
    }
  }

  const handleEdit = (gift) => {
    setShowModal(true)
    setEditGift(gift)
  }

  const toEditGift = (editedGift) => {
    setGifts((items) => {
      return items.map((_gift) =>
        _gift.id === editedGift.id ? editedGift : _gift
      )
    })

    console.log(gifts)
  }

  const handleDelete = (id) => {
    setGifts((gifts) => gifts.filter((gift) => gift.id !== id))
  }

  return (
    <div className='bg-white text-slate-900 mx-auto max-w-md w-full p-6 px-4 sm:px-6 flex flex-col gap-4 rounded-md'>
      <h1 className='text-4xl text-center text-red-500 font-semibold'>
        Whishlist
      </h1>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setEditGift={setEditGift}
      >
        <Form
          setShowModal={setShowModal}
          createNewGift={createNewGift}
          setEditGift={setEditGift}
          editGift={editGift}
          toEditGift={toEditGift}
        />
      </Modal>

      <div>
        <ul className='flex flex-col gap-2'>
          {gifts.length
            ? (
                gifts.map((gift, index) => (
                  <div
                    className='flex w-full rounded-md overflow-hidden'
                    key={index}
                  >
                    <li className='flex gap-4 bg-slate-50 items-center w-full pr-3'>
                      <img
                        className='w-16 sm:w-20 h-20 object-cover'
                        src={
                      isImage(gift.image)
                        ? gift.image
                        : 'https://static.vecteezy.com/system/resources/previews/010/263/593/original/round-gift-box-image-with-a-dark-red-color-wrap-paper-and-orange-color-ribbon-christmas-gift-on-a-transparent-background-gift-images-for-birthdays-anniversaries-or-christmas-events-design-free-png.png'
                    }
                        alt='gift image'
                      />
                      <div>
                        <p className='font-semibold text-lg md:text-xl'>
                          {gift?.name}
                          <span className='text-slate-700 text-base ml-1'>
                            {`x${gift?.quantity}`}
                          </span>
                        </p>
                        <p className='text-emerald-600 text-base font-semibold'>
                          {`$${gift.price * gift.quantity}`}
                        </p>

                        <p className='text-slate-700 text-sm md:text-base'>
                          {gift?.receiver}
                        </p>
                      </div>

                      <div className='flex items-center gap-2 sm:gap-3 ml-auto'>
                        <button
                          className='p-2 py-1 rounded-sm sm:font-semibold bg-emerald-700 text-white text-sm sm:text-base'
                          onClick={() => handleEdit(gift)}
                        >
                          Edit
                        </button>
                        <button
                          className='p-2 py-1 rounded-sm text-sm sm:text-base sm:font-semibold bg-rose-600 text-white'
                          onClick={() => handleDelete(gift.id)}
                        >
                          X
                        </button>
                      </div>
                    </li>
                  </div>
                ))
              )
            : (
              <>
                <p className='text-center'>
                  No hay regalos ¡Agrega alguno!
                </p>
                <img
                  className='h-80 w-80 mx-auto'
                  src='https://media.discordapp.net/attachments/989369450291683338/1059568020349005944/a21f1ac3-413c-4ec5-bda7-2aa6a47dc389.png'
                  alt='image that warns that there are no gifts '
                />
              </>
              )}
        </ul>
      </div>

      <button
        className='bg-red-500 text-white active:bg-red-600 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
        onClick={() => setGifts([])}
      >
        Delete All
      </button>
    </div>
  )
}

export default WishList
