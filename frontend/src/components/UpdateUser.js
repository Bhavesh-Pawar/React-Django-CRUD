import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UpdateUser() {
    const params = useParams();
  return (
    <div>
    
    UpdateUser # {params.id}

    <Link to="/" className='btn btn-primary'> Back </Link>
    </div>
  )
}
