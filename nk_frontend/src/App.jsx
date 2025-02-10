import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Contact from "./pages/ContactUs/contact";
import HomePage from "./pages/home/Homepage";
import AboutUs from "./pages/About/AboutUs";
import Clients from "./pages/Clients/client";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />

          <Route path="/contactUs" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
