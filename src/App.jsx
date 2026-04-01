import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cta from "./Components/Cta/Cta";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Products from "./Components/Products";
import Stat from "./Components/Stat/Stat";
import Step from "./Components/Step/Step";
import Cart from "./Components/Carts";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const modelPromise = getProducts();
// console.log(modelPromise);

function App() {
  const [activeTab, SetActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Stat></Stat>

      <div className="tabs tabs-box bg-transparent justify-center border-none">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={() => SetActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Carts(${carts.length})`}
          onClick={() => SetActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && (
        <Products
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        ></Products>
      )}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Step></Step>
      <Pricing></Pricing>
      <Cta></Cta>
      <Footer></Footer>
    </>
  );
}

export default App;
