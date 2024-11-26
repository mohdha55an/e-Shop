import React, { useState } from 'react'

const ChangeAdd = ({setAddress,setIsModelOpen}) => {
    const [newAddr, setNewAddr] =useState('')
    const onClose = () => {
        setAddress(newAddr)
        setIsModelOpen(false)
    }
  return (
    <div>
        <input type="text"
        placeholder='Enter new address'
        className='border p-2 w-full mb-4'
        onChange={(e) => setNewAddr(e.target.value)}
        />
        <div className='flex justify-end'> 
            <button className='bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded mr-2' 
            onClick={() => setIsModelOpen(false)}>
                Cancel
            </button>
            <button className='bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded '
            onClick={onClose}>
                Save Address
            </button>
        </div>
    </div>
  )
}

export default ChangeAdd