import React, {useEffect, useState} from "react";

import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
}

// TODO: Find better solution
const API_URL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:8080/api/users'
  : 'https://kids-toyss.herokuapp.com/api/users';

function App() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetch(API_URL);
        const dataJson = await data.json();

        setUsers(dataJson);
      } catch (error) {
        console.error(error);
      }
    }

    getUsers();
  }, []);


  return (
    <>
      {users?.map(user =>
        <div key={user.id}>
          <p>USER ID: {user.id}</p>
          <p>USER NAME: {user.name}</p>
          <p>USER EMAIL: {user.email}</p>
        </div>
      )}
    </>
  )
}

export default App;
