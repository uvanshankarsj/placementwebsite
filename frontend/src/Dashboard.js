import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const [users, setUsers] = useState([]);

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

  console.log(users.result1)
  return (
    <div>
      <div class="container" style={{ textAlign: 'center', padding: "2%", backgroundColor: 'black' }}>
        <div class="row" style={{ backgroundColor: "white", padding: "10px" }}>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>Total strength</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "2%", }}>{users.result1}</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>eligible students</div>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>not eligible students</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "2%", }}>{users.result3}</div>
          <div class="col" style={{ padding: "2%", }}>{users.result1 - users.result3}</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>appearing for placement</div>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>not appearing for placement</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "2%", }}>{users.result2}
            <div class="row">
              <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>placed</div>
              <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>not placed</div>
              <div class="w-100"></div>
              <div class="col" style={{ padding: "2%", }}>{users.result4}
                <div class="row">
                  <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>Intern</div>
                  <div class="col" style={{ padding: "1%", backgroundColor: "rgb(140, 232, 237)" }}>FTE</div>
                  <div class="w-100"></div>
                  <div class="col" style={{ padding: "2%", }}>{users.result5}</div>
                  <div class="col" style={{ padding: "2%", }}>{users.result4 - users.result5}</div>
                </div>
              </div>
              <div class="col" style={{ padding: "2%", }}>{users.result2 - users.result4}</div>
            </div>
          </div>
          <div class="col" style={{ padding: "2%", }}>{users.result2 - users.result3}</div>
        </div>
      </div>
    </div>);
}

export default Dashboard