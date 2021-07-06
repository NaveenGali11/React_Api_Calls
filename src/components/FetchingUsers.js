import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchingUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res);
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div style={{ paddingTop: '20px' }}>
      Fetching Api Data
      <ul style={{ listStyle: 'none' }}>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingUsers;
