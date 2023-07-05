import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Heading from './Heading';
import axios from 'axios';

export default function UpdateUser() {
  const params = useParams();
  let [userData, setUser] = useState({pk_user:'',full_name:'',father_name:'',mother_name:'',age:'',mobile:'',email:''});
  let [isFormSubmitted , setFormSubmit] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/getUser/${params.id}/`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user)
      });
  }, [params.id]);

  function submitData(e){
    e.preventDefault();
    setFormSubmit(true);
  }

  return (
    <>
      <Heading />
      <div>
        <Link to="/" className='btn btn-primary float-end'> Back </Link>
        <h1 className='text-center text-success mt-2'>Update User</h1>
        <form onSubmit={(e)=>submitData(e)}>
          <div className="mt-2">
            <label htmlFor="name" className="form-label">Full name : </label>
            <input type="text" onChange={(e)=>setUser({...userData,full_name : e.target.value})} className="form-control" id="name" value={userData.full_name} />
          </div>
          <div className="mt-2">
            <label htmlFor="father_name" className="form-label">Father name : </label>
            <input type="text" onChange={(e)=>setUser({...userData,father_name : e.target.value})} className="form-control" id="father_name" value={userData.father_name} />
          </div>
          <div className="mt-2">
            <label htmlFor="mother_name" className="form-label">Mother name : </label>
            <input type="text" onChange={(e)=>setUser({...userData,mother_name : e.target.value})} className="form-control" id="mother_name" value={userData.mother_name} />
          </div>
          <div className="mt-2">
            <label htmlFor="email" className="form-label">Email : </label>
            <input type="email" onChange={(e)=>setUser({...userData,email : e.target.value})} className="form-control" id="email" value={userData.email} />
          </div>
          <div className="mt-2">
            <label htmlFor="age" className="form-label">Age : </label>
            <input type="text" onChange={(e)=>setUser({...userData,age : e.target.value})} className="form-control" id="age" value={userData.age} />
          </div>
          <div className="mt-2">
            <label htmlFor="mobile" className="form-label">Mobile : </label>
            <input type="text" onChange={(e)=>setUser({...userData,mobile : e.target.value})} className="form-control" id="mobile" value={userData.mobile} />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
        {isFormSubmitted && (<Navigate to="/" />)}
      </div>
    </>
  )
}
