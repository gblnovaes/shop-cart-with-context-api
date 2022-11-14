 

import React from "react";

import CartProvider from "./context/cart";
import Routes from "./src/pages/routes";
 
export default function App() {

    return (
      <CartProvider>
          <Routes />
      </CartProvider>
    );
     
  }