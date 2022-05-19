import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainNav from "./components/navigation/MainNav";
import Benefiet from "./pages/benefiet/Benefiet";
import Home from "./pages/home/Home";
import Wijn from "./pages/wijn/Wijn";

function App() {
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wijn" element={<Wijn />}></Route>
        <Route path="/benefiet" element={<Benefiet />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
