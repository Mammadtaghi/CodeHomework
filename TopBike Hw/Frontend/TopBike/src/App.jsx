import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './Layouts/Layout';
import AboutUs from './Pages/AboutUs Page';
import ContactUs from './Pages/ContactUs Page';
import Home from './Pages/Home Page';
import Shop from "./Pages/Shop Page";
import Error from "./Pages/Error Page";
import { IsOpenProvider } from "./Context/isOpenContext";
import { UserProvider } from "./Context/userContext";

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <IsOpenProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/aboutus"} element={<AboutUs />}></Route>
              <Route path={"/contactus"} element={<ContactUs />}></Route>
              <Route path={"/shop"} element={<Shop />}></Route>
              <Route path={"*"} element={<Error />}></Route>
            </Route>
          </Routes>
        </IsOpenProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
