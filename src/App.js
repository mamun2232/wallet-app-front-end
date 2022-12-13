import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Authenticaton/Login";
import { Route, Routes } from "react-router-dom";
import Registion from "./components/Authenticaton/Registion";
import ComplectProfile from "./components/Authenticaton/ComplectProfile";
import Home from "./components/Home/Home";
import Scan from "./components/Home/Scan";
import ScanQrCode from "./components/Home/ScanQrCode";
import Payment from "./components/Home/Payment";
import PaymentSuccess from "./components/Home/PaymentSuccess";
import Challange from "./components/DailyChallange/Challange";
import Profile from "./components/Profile/Profile";
import Status from "./components/Profile/Status";
import Achevment from "./components/Profile/Achevment";

function App() {
  return (
    <div className=" bg-[#1E1E1E] w-[100vw] h-[100vh]">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registion />}></Route>
        <Route path="/complectProfile" element={<ComplectProfile />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/loyaltyCard" element={<Scan />}></Route>
        <Route path="/scanQr" element={<ScanQrCode/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/PaymentSuccess" element={<PaymentSuccess/>}></Route>
        <Route path="/challange" element={<Challange/>}></Route>
        <Route path="/profile" element={<Profile/>}>
        <Route index element={<Status />} />
        <Route path="/profile/achivemment" element={<Achevment />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
