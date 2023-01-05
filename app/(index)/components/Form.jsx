function Form ({ handleSubmit, handleChange, gift, setShowModal }) {
  return (
    <form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
      <input
        value={gift.name}
        name='name'
        placeholder='Enter gift name'
        type='text'
        onChange={handleChange}
        autoComplete='off'
        className='peer w-full rounded-md border border-slate-300 bg-white p-2 text-sm placeholder-slate-600/80
          focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
      />
      <input
        value={gift.image}
        name='image'
        placeholder='Enter url'
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
  )
}

export default Form
