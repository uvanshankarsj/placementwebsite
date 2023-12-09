import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard";
import { useState, useEffect } from 'react';
import Update from './update';

function App() {
  const [page, setpage] = useState(<Dashboard/>);
  const [style1, setstyle1] = useState("nav-item nav-link active");
  const [style2, setstyle2] = useState("nav-item nav-link");
  const [Themme, setThemme] = useState("nav nav-pills nav-justified bg-dark");
  

  const handleNavbarClick = () => {
    setpage(<Dashboard/>);
    setstyle1("nav-item nav-link active");
    setstyle2("nav-item nav-link");
  };
  
  const handleNavbarClick2 = () => {
    setpage(<Update/>);
    setstyle1("nav-item nav-link");
    setstyle2("nav-item nav-link active");
  };

  const handleNavbarClick3 = () => {
    if(Themme === "nav nav-pills nav-justified bg-lite"){
      setThemme("nav nav-pills nav-justified bg-dark");
    }
    else{
      setThemme("nav nav-pills nav-justified bg-lite");
    }
  }

  console.log(page);
  // return the page based on the value of the page state variable\
  return (
  <div>
  <nav class={Themme}>
  <a class={style1} onClick={handleNavbarClick} >Dashboard</a>
  <a class={style2} onClick={handleNavbarClick2}>Update</a>
  {/* <a style={{textAlign:'right'}} onClick={handleNavbarClick3}>Themme</a> */}
  </nav>
  {page}
  </div>
  )
}
export default App;
