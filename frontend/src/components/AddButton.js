import React from 'react'
import { Link } from 'react-router-dom'

function AddButton() {
  return (
    <div className='float-end'>
        <Link to="addUser/" className='btn btn-primary float-end'> Add User </Link>
    </div>
  )
}

export default AddButton