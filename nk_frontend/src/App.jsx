import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Contact from "./pages/ContactUs/contact";
import HomePage from "./pages/home/Homepage";
import AboutUs from "./pages/About/AboutUs";
import Clients from "./pages/Clients/client";
import Footer from "./Components/Footer/footer";
import Services from "./pages/Services/services";

function App() {
  return (
    <>
    <div className="app-container"> 
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />

          <Route path="/contactUs" element={<Contact />} />

        </Routes>
      </BrowserRouter>
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
