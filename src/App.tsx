import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import bg1 from "./assets/bg1.jpg";
import * as te from "tw-elements";
import Food from "./components/Food";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);
  const images = [
  'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?cs=srgb&dl=cheese-crust-delicious-2619967.jpg&fm=jpg',
  'https://images6.alphacoders.com/698/698287.jpg',
  'https://hdwallpaperim.com/wp-content/uploads/2017/09/17/60012-food-pizza-cheese.jpg',
  'http://www.letribunaldunet.fr/wp-content/uploads/2020/05/pizza.jpg',
  'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/24/17/istock-537640710.jpg',
  'http://www.zastavki.com/pictures/1920x1200/2011/Food_Pizza_Delicious_pizza_029580_.jpg',
];


  return (
    <div className="bg-black" >
      <Navbar />
      <Hero images={images}/>
      <Food />
      <Footer year={2023}/>
    </div>
  );
}

export default App;
