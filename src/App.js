


import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import context from "./context";
import Nav from "./nav"
import Deposit from "./deposit";
import Alldata from "./alldata";
import Withdraw from "./withdraw";
import Createaccount from "./register";
import Bank from "./bank";
import Login from "./login";
// import nav from "./navigate";
export default function App() {
  return (
    <>
 <HashRouter>
        <Nav/>
        <context.Provider
          value={{
            users: [
              {
                sno:"1",
                name: "hepsi",
                email: "hepsi@gmail.com",
                password: "holy christ",
                balance: ""
              }
            ]
          }}
        >
          <Routes>
          <Route path="/bank" element={<Bank />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/alldata" element={<Alldata />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/register" element={<Createaccount/>} />
            <Route path="/login" element={<Login/>} />
            {/* <Route path="/navigate" element={<Navigate/>} /> */}
          </Routes>
        </context.Provider>
      </HashRouter>
    </>
  );
}



