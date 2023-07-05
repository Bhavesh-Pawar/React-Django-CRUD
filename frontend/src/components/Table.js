import React, { useEffect, useState } from "react";
import axios from 'axios';
import TableColumns from "./TableColumns";
import TableRows from "./TableRows";

function MyTable() {
    let [users , setUsers ] = useState([]);

    useEffect(()=>{
      axios
        .get('http://127.0.0.1:7000/api/getUsers/')
        .then((res)=>{
          setUsers(res.data.users);
        })
    },[]); 

      let all_users = users;
      let table_rows = all_users.map((user) => (
          <TableRows key={user.pk_user}
              pk={user.pk_user} fname={user.full_name} 
              pname={user.father_name} mname={user.mother_name} age={user.age} 
              email={user.email} mobile={user.mobile} />
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
    </React.Fragment>
  );
}

export default MyTable;