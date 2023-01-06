'use client'

import Form from './Form'

export default function Modal ({
  showModal,
  setShowModal,
  handleSubmit,
  handleChange,
  gift
}) {
  return (
    <>
      <button
        className='bg-red-500 text-white active:bg-red-600 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Agregar regalo
      </button>
      {showModal && (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/* content */}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/* header */}
                <div className='flex items-start justify-between p-6 py-4 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-2xl font-semibold'>
                    Agrega el regalo
                  </h3>
                </div>
                {/* body */}
                <div className='relative p-6 flex-auto'>
                  <Form
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    gift={gift}
                    setShowModal={setShowModal}
                  />
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
