import React from "react";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import SingleJewel from "./components/Pages/SingleJewel";
import CartPage from "./components/Pages/CartPage";
import Ck from "./components/Pages/Ck";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ck" element={<Ck />} />
          <Route path="/product" element={<Product />} />
          <Route path="/jewel/:id" element={<SingleJewel />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
