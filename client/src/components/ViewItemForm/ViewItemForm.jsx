import React from 'react'

const ViewItemForm = () => {
  return (
    <form action="">
        <div>
        <label>Quantity</label>
        <input
          type="number"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>
            Add to Cart
        </button>
        </div>
    </form>
  )
}

export default ViewItemForm
