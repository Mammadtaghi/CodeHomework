import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './Layouts/Layout';
import AboutUs from './Pages/AboutUs Page';
import ContactUs from './Pages/ContactUs Page';
import Home from './Pages/Home Page';
import Shop from "./Pages/Shop Page";
import Error from "./Pages/Error Page";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/aboutus"} element={<AboutUs />}></Route>
                    <Route path={"/contactus"} element={<ContactUs />}></Route>
                    <Route path={"/shop"} element={<Shop />}></Route>
                    <Route path={"*"} element={<Error />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
