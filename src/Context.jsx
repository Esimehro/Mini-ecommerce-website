import React, { useState,createContext } from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { CartPage } from './Components/CartPage';

export const Cart = createContext();

export const Context = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <Cart.Provider value={{ cartItem, setCartItem }}>
      <BrowserRouter>
        <Header/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Cart.Provider>
  )
}
