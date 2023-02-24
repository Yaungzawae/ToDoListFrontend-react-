import { Fragment, useState } from "react";
import {Route , Routes} from "react-router-dom"
import Login from './components/Auth';
import Home from "./components/Home";
import Warning from "./ui/warning";


function App() {
  const [warning, setWarning] = useState(false);

  return (
    <Fragment>
  <Routes>
    <Route path="/" element={<Home warningStatus={warning} setWarning={setWarning}/>} />
    <Route path="/auth/login" element={<Login method="login" />} />
    <Route path="/auth/register" element={<Login method="register" />} />
  </Routes>
  </Fragment>
  )
}

export default App;
