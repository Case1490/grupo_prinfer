import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import MainCenter from "./components/MainCenter"
import Navbar from "./components/Navbar"
import AllProduct from "./components/AllProduct";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import LastNews from "./components/LastNews";
import ProductDetailInfo from "./components/ProductDetailInfo";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainCenter />} />
        <Route path="/productos" element={<AllProduct />} />
        <Route path="/novedades" element={<LastNews />} />
        <Route path="/novedades/:idNews" element={<ProductDetailInfo />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
