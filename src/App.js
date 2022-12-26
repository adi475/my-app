
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { useState } from "react";
// import Accordian from "./components/Accordian";
// import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  const [btnTxt, setbtnTxt] = useState("Enable Darkmode");

  const [btnTxtColor, setbtnTxtColor] = useState("dark");

  const [Mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setbtnTxtColor("light");
      setbtnTxt("Disable Darkmode");
      document.body.style.backgroundColor = "#0b0529";
      showAlert(" dark-mode has been enabled", "success");
    } else {
      setMode("light");
      setbtnTxtColor("dark");
      setbtnTxt("Enable Darkmode");
      document.body.style.backgroundColor = "white";
      showAlert(" light-mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="MY APP"
          aboutText="about us"
          mode={Mode}
          switch={toggleMode}
          btn={btnTxtColor}
          Btn={btnTxt}
        />
      
        <Alert alrt={alert} />

        {/* <Routes> */}
          {/* <Route exact path="/" element={ } /> */}
          <Textform                 //we can also use path instead of exact path.
              heading="ENTER YOUR TEXT TO ANALYZE"
              mode={Mode}
              shwAlrt={showAlert}
            />
           {/* <Route exact path="about" element={} /> */}
           {/* <Accordian mode={Mode}/> */}
        {/* </Routes> */}
      
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
