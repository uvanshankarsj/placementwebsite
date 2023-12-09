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
    <div style={{ paddingTop: "2%", backgroundColor: "whitesmoke", height: "auto" }}>
      <div class="container" style={{ textAlign: 'center', padding: "2%", backgroundColor: 'black' }}>
        <div class="row" style={{ backgroundColor: "whitesmoke", padding: "10px" }}>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>Total strength</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "2%", }}>{users.result1}</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>eligible students</div>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>not eligible students</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "2%", }}>{users.result3}</div>
          <div class="col" style={{ padding: "2%", }}>{users.result1 - users.result3}</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>appearing for placement</div>
          <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>not appearing for placement</div>
          <div class="w-100"></div>
          <div class="col" style={{ padding: "2%", }}>{users.result2}
            <div class="row">
              <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>placed</div>
              <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>not placed</div>
              <div class="w-100"></div>
              <div class="col" style={{ padding: "2%", }}>{users.result4}
                <div class="row">
                  <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>Intern</div>
                  <div class="col" style={{ padding: "1%", backgroundColor: "rgb(126, 205, 214)" }}>FTE</div>
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
    </div>
  );
}

export default Dashboard