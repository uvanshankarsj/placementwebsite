import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Update() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:5000/login")
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



  return (
    <div style={{ textAlign: "center",padding:"5%",}}>
      <form method="get" action="http://localhost:5000/update">
        <table style={{marginLeft:"10%",width:"80%",textAlign:"center",padding:"10%",border:"2px solid black",backgroundColor:"rgb(126, 205, 214)"}}>
          <tr>
            <th style={{padding:"3%",border:"3px solid black"}}>
              <label>Student Name</label>
            </th>
            <th style={{padding:"3%",border:"3px solid black"}}>
              <select name="name">
                {users.stu && users.stu.map((user, index) => (
                  <option key={index} value={user.studentname}>{user.studentname}</option>
                ))}
              </select>
            </th>
          </tr>
          <tr>
            <td style={{padding:"3%",border:"3px solid black"}}>
              <label>student status</label>
            </td>
            <td style={{padding:"3%",border:"3px solid black"}}>
              <select name="status">
                <option value="placed">placed</option>
                <option value="not placed">not placed</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{padding:"3%",border:"3px solid black"}}>
              <label>job type</label>
            </td>
            <td style={{padding:"3%",border:"3px solid black"}}>
              <select name="type">
                <option value="full time">full time</option>
                <option value="internship">internship</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{padding:"3%",border:"3px solid black"}}>
              <label>company</label>
            </td>
            <td style={{padding:"3%",border:"3px solid black"}}>
              <input type="text" name="company"></input>
            </td>
          </tr>
        </table>
        <br></br>
        <button>click</button>
      </form>
    </div>
  );
}
export default Update;
