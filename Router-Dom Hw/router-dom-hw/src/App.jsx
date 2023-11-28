import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from "./Layout";
import Gallery from "./Pages/Gallery/Gallery";
import Shortcodes from "./Pages/Shortcodes/Shortcodes";
import Languages from "./Pages/Languages/Languages";
import Home from "./Pages/Home/Home";
import PageMarkup from "./Pages/PageMarkup";
import Contact from "./Pages/Contact/Contact";
import ImageAlingment from "./Pages/ImageAlingment/ImageAlingment";
import ClearingFloats from "./Pages/ClearingFloats/ClearingFloats";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/shortcodes" element={<Shortcodes/>}></Route>
          <Route path="/languages" element={<Languages/>}></Route>
          <Route path="/pageMarkup" element={<PageMarkup/>}></Route>
          <Route path="/contactFrom" element={<Contact/>}></Route>
          <Route path="/imageAlingment" element={<ImageAlingment/>}></Route>
          <Route path="/clearingFloats" element={<ClearingFloats/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
