import "./App.css";
import { useState, createContext } from "react";

import NavBar from "./Components/NavBar/NavBar";
import AddTocart from "./Components/AddToCart/AddToCart";
import PhotoSlides from "./Components/PhotoSlides/PhotoSlides";
import SneakerText from "./Components/SneakerText/SneakerText";

export const navBarData = createContext();

function App() {
  const [valueQuant, setValuequant] = useState(0);

  const onpassFunc = (data) => {
    setValuequant(data);
  };

  return (
    <div className="app-container">
      <navBarData.Provider value={valueQuant}>
        <NavBar />
      </navBarData.Provider>
      <PhotoSlides />
      <SneakerText />
      <AddTocart onpass={(value) => onpassFunc(value)} />;
      {/* passing state from child{AddToCart.js} to parent component{App.js} by passing in a callback function as a prop   */}
    </div>
  );
}

export default App;
