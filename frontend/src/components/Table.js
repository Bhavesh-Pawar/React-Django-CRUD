import React, { useEffect, useState } from "react";
import axios from 'axios';
import TableColumns from "./TableColumns";
import TableRows from "./TableRows";
import { Navigate } from "react-router-dom";

function MyTable() {
    let [users , setUsers ] = useState([]);
    let [confirmDeleteUser , setConfirmDeleteUser] = useState(false);
    let [pkUser , setPkUser] = useState(0);

    const confirmDelete = (name,pk) =>{
      let bool = window.confirm(`Do you want to delete ${name} ${pk}`);
      if(bool){
        console.log("Delete it");
      }
      setPkUser(pk);
      setConfirmDeleteUser(bool);
    }
    function fetchUsers(){
      axios
      .get('http://127.0.0.1:7000/api/getUsers/')
      .then((res)=>{
        setUsers(res.data.users);
      })
    }
    useEffect(()=>{
      console.log(confirmDeleteUser);
      if(confirmDeleteUser){
        axios
        .delete(`http://127.0.0.1:7000/api/getUser/${pkUser}/`)
        .then((res)=>{
          console.log(res.data);
          fetchUsers();
        })
      }
      fetchUsers()
        // eslint-disable-next-line
    },[confirmDeleteUser]); 

      let all_users = users;
      let table_rows = all_users.map((user) => (
          <TableRows key={user.pk_user}
              pk={user.pk_user} fname={user.full_name} 
              pname={user.father_name} mname={user.mother_name} age={user.age} 
              email={user.email} mobile={user.mobile} click={confirmDelete} />
      ));
      return (
    <React.Fragment>
    <h3 className="text-center">
        Users Table
    </h3>
    <div className="table-responsive">
    <table className="table table-bordered mt-2">
      <thead>
        <tr>
            <TableColumns />          
        </tr>
      </thead>
      <tbody>
        {table_rows}
      </tbody>
    </table>
    </div>
    {confirmDeleteUser && (<Navigate to="/" />)}
    </React.Fragment>
  );
}

export default MyTable;