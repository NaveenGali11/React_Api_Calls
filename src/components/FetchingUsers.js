/* eslint-disable no-console */
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';

const FetchingUsers = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res.data);
        setusers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <h2>Fetching Users</h2>
      <ul style={{ listStyle: 'none' }}>
        {users.map(user => (
          <li key={user.id}>
            <p>
              <h5>User Details </h5>
              Name : {user.name}
              <br />
              userName : {user.username}
              <br />
              email : {user.email}
              <br />
              phoneNumber : {user.phone}
              <br />
              <a href={user.website} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
              <h6>Company Details</h6>
              Company-bs : {user.company.bs}
              <br />
              Company-Name : {user.company.name}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(FetchingUsers);
