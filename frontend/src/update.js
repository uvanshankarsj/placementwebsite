import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Update() {
    fetch("http://localhost:5000/users")
    .then(response => {
    return response.json()
    })
    .then(data => {
    setUsers(data)
    })
    }
    return (<div>
        <form method="get" action="http://localhost:5000/update" >
            <select name="name">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
            <input type="text" name="cgpa"></input>
            <button>click</button>
        </form>
    </div>
    )
}
export default Update;
