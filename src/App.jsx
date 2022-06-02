import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home";
import Collections from "../src/Pages/Collections";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Men from "../src/Pages/Men";
import Women from "../src/Pages/Women";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Collections" element={<Collections />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Men" element={<Men />} />
        <Route path="Women" element={<Women />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
