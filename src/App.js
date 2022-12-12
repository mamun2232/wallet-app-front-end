import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Authenticaton/Login";
import { Route, Routes } from "react-router-dom";
import Registion from "./components/Authenticaton/Registion";
import ComplectProfile from "./components/Authenticaton/ComplectProfile";
import Home from "./components/Home/Home";
import Scan from "./components/Home/Scan";

function App() {
  return (
    <div className=" bg-[#1E1E1E] w-[100vw] h-[100vh]">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registion />}></Route>
        <Route path="/complectProfile" element={<ComplectProfile />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/scan" element={<Scan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
