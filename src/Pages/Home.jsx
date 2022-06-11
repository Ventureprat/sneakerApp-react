import { useState, createContext } from "react";
import "./Home.css";

import NavBar from "../Components/NavBar/NavBar";
import AddTocart from "../Components/AddToCart/AddToCart";
import PhotoSlides from "../Components/PhotoSlides/PhotoSlides";
import SneakerText from "../Components/SneakerText/SneakerText";
import PhotoModal from "../Components/PhotoSlides/PhotoModal/PhotoModal";

export const navBarData = createContext();

function Home() {
  const [valueQuant, setValuequant] = useState(0);

  const onpassFunc = (data) => {
    setValuequant(data);
  };

  return (
    <>
      <div className="app-container">
        <navBarData.Provider value={valueQuant}>
          <NavBar />
        </navBarData.Provider>
        <main className="mainPart">
          <PhotoSlides />
          <SneakerText />
        </main>
        <AddTocart onpass={(value) => onpassFunc(value)} />;
        {/* passing state from child{AddToCart.js} to parent component{App.js} by passing in a callback function as a prop   */}
      </div>
      <PhotoModal />
    </>
  );
}

export default Home;
