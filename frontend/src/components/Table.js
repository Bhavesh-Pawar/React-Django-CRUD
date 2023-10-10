import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import TableColumns from "./TableColumns";
import TableRows from "./TableRows";
import { Navigate } from "react-router-dom";

function MyTable() {
  let [users, setUsers] = useState([]);
  let [confirmDeleteUser, setConfirmDeleteUser] = useState(false);
  let [pkUser, setPkUser] = useState(0);
  let [searchVal, setSearchVal] = useState("");

  const confirmDelete = (name, pk) => {
    let bool = window.confirm(`Do you want to delete ${name} ${pk}`);

    setPkUser(pk);
    setConfirmDeleteUser(bool);
  }

  const fetchUsers = useCallback(() => {
    axios
      .get('http://127.0.0.1:7000/api/getUsers/')
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch(error => {
        console.log("Server is down");
      });
  }, []);

  useEffect(() => {
    if (confirmDeleteUser) {
      axios
        .delete(`http://127.0.0.1:7000/api/getUser/${pkUser}/`)
        .then((res) => {
          console.log(res.data);
          fetchUsers();
        })
        .catch(error => {
          console.log("Server is down");
        });
    }

    fetchUsers();
  }, [confirmDeleteUser, pkUser, fetchUsers]);

  // Filter users based on search value
  const filteredUsers = searchVal ? users.filter(user => user.full_name.includes(searchVal)) : users;
  let table_rows = filteredUsers.map(user => (
    <TableRows key={user.pk_user}
      pk={user.pk_user} fname={user.full_name}
      pname={user.father_name} mname={user.mother_name} age={user.age}
      email={user.email} mobile={user.mobile} click={confirmDelete} />
  ));

  return (
    <React.Fragment>
      <h3 className="text-center">Users Table</h3>

      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="full_name" className="col-form-label">Full Name</label>
        </div>
        <div className="col-auto">
          <input type="text" onChange={(e) => setSearchVal(e.target.value)} id="full_name" className="form-control" />
        </div>
      </div>

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