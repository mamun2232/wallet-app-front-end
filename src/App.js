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
import Active from "./components/Profile/Active";
import Setting from "./components/Setting/Setting";
import Faq from "./components/Setting/Faq";
import Support from "./components/Setting/Support";
import Shop from "./components/Shop/Shop";
import Wallet from "./components/Wallet/Wallet";

import { ToastContainer } from "react-toastify";
import RequreAuth from "./components/Authenticaton/RequreAuth";
import AddLaylityCard from "./components/Home/AddLaylityCard";

function App() {
  return (
    <div className=" bg-[#1E1E1E] w-[100vw] h-screen ">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registion />}></Route>
        <Route path="/complectProfile" element={<ComplectProfile />}></Route>
        <Route
          path="/home"
          element={
            <RequreAuth>
              <Home />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/loyaltyCard"
          element={
            <RequreAuth>
              <AddLaylityCard/>
            </RequreAuth>
          }
        ></Route>
        <Route path="/loyaltyCard" element={<Scan />}></Route>
        <Route path="/scanQr" element={<ScanQrCode />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/PaymentSuccess" element={<PaymentSuccess />}></Route>
        <Route
          path="/challange"
          element={
            <RequreAuth>
              <Challange />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <RequreAuth>
              <Profile />
            </RequreAuth>
          }
        >
          <Route
            index
            element={
              <RequreAuth>
                <Status />
              </RequreAuth>
            }
          />
          <Route
            path="/profile/achivemment"
            element={
              <RequreAuth>
                <Achevment />
              </RequreAuth>
            }
          />
          <Route
            path="/profile/active"
            element={
              <RequreAuth>
                <Active />
              </RequreAuth>
            }
          />
        </Route>
        <Route
          path="/setting"
          element={
            <RequreAuth>
              <Setting />
            </RequreAuth>
          }
        />
        <Route
          path="/faq"
          element={
            <RequreAuth>
              <Faq />
            </RequreAuth>
          }
        />
        <Route
          path="/support"
          element={
            <RequreAuth>
              <Support />
            </RequreAuth>
          }
        />
        <Route
          path="/shop"
          element={
            <RequreAuth>
              <Shop />
            </RequreAuth>
          }
        />
        <Route
          path="/wallet"
          element={
            <RequreAuth>
              <Wallet />
            </RequreAuth>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
