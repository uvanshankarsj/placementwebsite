import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard";
import { useState, useEffect } from 'react';
import Update from './update';

function App() {
  const [page, setpage] = useState(<Update/>);
  
  // useEffect(() => {
  //   setpage(<Dashboard/>);
  // }, []);
  
  const handleNavbarClick = () => {
    setpage(<Dashboard/>);
  };
  const handleNavbarClick2 = () => {
    setpage(<Update/>);
  };
  console.log(page);
  // return the page based on the value of the page state variable\
  return (
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" onClick={handleNavbarClick} >Dashboard</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" onClick={handleNavbarClick2}>Update</a>
          </li>
        </ul>
      </div>
    </nav>
  {page}
  </div>
  )
}
export default App;
