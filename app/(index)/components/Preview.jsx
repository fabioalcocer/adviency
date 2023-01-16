import { useState } from 'react'

function Preview ({ gifts }) {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      <button
        className='bg-red-500 text-white active:bg-red-600 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowPreview(true)}
      >
        Preview
      </button>

      {showPreview && (
        <>
          <div className='w-[90%] mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex items-start flex-col justify-between gap-4 p-5 py-4 rounded-t'>
                  <h3 className='text-2xl font-semibold'>Preview</h3>
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
                              gift.image
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
                            </li>
                          </div>
                        ))
                      )
                    : (
                      <>
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
                      </>
                      )}
                  <div className='flex justify-between w-full mt-4'>
                    <button
                      className='bg-red-500 text-white active:bg-red-600 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setShowPreview(false)}
                    >
                      Close
                    </button>
                    <button
                      className='bg-slate-100 text-black active:bg-slate-300 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setShowPreview(false)}
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-50 fixed inset-0 z-40 bg-black' />
        </>
      )}
    </>
  )
}

export default Preview
