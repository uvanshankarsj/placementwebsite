import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard";
import { useState } from 'react';
import Update from './update';
import light from './images/light.png';
import dark from './images/dark.png';

function App() {
  const [page, setpage] = useState(<Dashboard />);
  const [style1, setstyle1] = useState("nav-item nav-link active");
  const [style2, setstyle2] = useState("nav-item nav-link");
  const [Themme, setThemme] = useState("nav nav-pills nav-justified bg-dark");
  const [themebutton, setthemebutton] = useState(light);


  const handleNavbarClick = (pagename) => {
    if (pagename === "Dashboard") {
      setpage(<Dashboard />);
      setstyle1("nav-item nav-link active");
      setstyle2("nav-item nav-link");
    } else if (pagename === "Update") {
      setpage(<Update />);
      setstyle1("nav-item nav-link");
      setstyle2("nav-item nav-link active");
    }
  };

  const handleNavbarClick3 = () => {
    if (Themme === "nav nav-pills nav-justified bg-lite") {
      setThemme("nav nav-pills nav-justified bg-dark");
      setthemebutton(dark);
    }
    else {
      setThemme("nav nav-pills nav-justified bg-lite");
      setthemebutton(light);
    }
  }

  console.log(page);
  return (
    <div>
      <nav class={Themme}>
        <a class={style1} onClick={() => handleNavbarClick("Dashboard")}>Dashboard</a>
        <a class={style2} onClick={() => handleNavbarClick("Update")}>Update</a>
      </nav>
      <div style={{ position: "fixed", bottom: "0", right: "0" }}>
        
      <button style={{ height: "50px", width: "100px", position: "fixed", bottom: "0", right: "0" }} onClick={handleNavbarClick3}><img src={themebutton} style={{ height: "100%", width: "100%" }} alt='theme'></img></button>
        {/* <button style={{ height: "", position: "relative" }} onClick={handleNavbarClick3}><img src={images} style={{ height: "100%", width: "100%" }}></img></button> */}
      </div>
      {/* <button style={onClick={handleNavbarClick3}>Change Theme</button> */}
      {page}
    </div>
  )
}
export default App;
