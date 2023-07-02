import React from "react";
import TableColumns from "./TableColumns";
import TableRows from "./TableRows";

function MyTable() {
    const users = {
        "users": [
          {
            "pk_user": 1,
            "full_name": "Bhavesh Panwar",
            "father_name": "Nilesh Panwar",
            "mother_name": "Pooja Panwar",
            "age": "24",
            "mobile": "9300144532",
            "email": "bhaveshpanwar783@gmail.com"
          },
          {
            "pk_user": 2,
            "full_name": "Dhruv Panwar",
            "father_name": "Nilesh Panwar",
            "mother_name": "Pooja Panwar",
            "age": "16",
            "mobile": "7879668406",
            "email": "dhruvpanwar123@gmail.com"
          },
          {
            "pk_user": 3,
            "full_name": "Kushal Panwar",
            "father_name": "Mitesh Panwar",
            "mother_name": "Urmila Panwar",
            "age": "16",
            "mobile": "7879668406",
            "email": "kushal.panwar@gmail.com"
          },
          {
            "pk_user": 4,
            "full_name": "Yashika Panwar",
            "father_name": "Mitesh Panwar",
            "mother_name": "Urmila Panwar",
            "age": "18",
            "mobile": "7879668406",
            "email": "yashika789@gmail.com"
          },
          {
            "pk_user": 8,
            "full_name": "Mitesh Panwar",
            "father_name": "Mohanlal Panwar",
            "mother_name": "Vimla Bai Panwar",
            "age": "18",
            "mobile": "7879668406",
            "email": "mitesh.panwar@gmail.com"
          },
          {
            "pk_user": 10,
            "full_name": "Nilesh Panwar",
            "father_name": "Mohanlal Panwar",
            "mother_name": "Vimla Bai Panwar",
            "age": "18",
            "mobile": "9926350022",
            "email": "nilesh.panwar@gmail.com"
          }
        ]
      };
      let all_users = users.users;
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
    </React.Fragment>
  );
}

export default MyTable;