'use client'

export default function Modal ({
  showModal,
  setShowModal,
  setEditGift,
  children
}) {
  const handleAddGift = () => {
    setShowModal(true)
    setEditGift(null)
  }

  return (
    <>
      <button
        className='bg-red-500 text-white active:bg-red-600 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
        type='button'
        onClick={handleAddGift}
      >
        Agregar regalo
      </button>
      {showModal && (
        <>
          <div className='w-[90%] mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/* content */}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-6 py-4 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-2xl font-semibold'>
                    Add a new Gift!
                  </h3>
                </div>

                <div className='relative p-6 flex-auto'>
                  {children}
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
