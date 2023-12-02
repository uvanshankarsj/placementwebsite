import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([])
  
  const fetchUserData = () => {
    fetch("http://localhost:5000/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  return (<table><tr><th>Eligible</th></tr><tr><td>{users.count}</td></tr></table>);
}
export default App;
