import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
