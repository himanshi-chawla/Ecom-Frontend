import React, { createContext, useState } from "react";
import all_product from "../Components/Assests/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => getDefaultCart());

  const addToCart = (itemId) => {
    // Ensure we're passing the previous state properly
    setCartItems(prevCartItems => ({ 
      ...prevCartItems, 
      [itemId]: prevCartItems[itemId] + 1 
    }));
  };

  const removeFromCart = (itemId) => {
    // Prevent negative values by checking if the item count is greater than 0
    setCartItems(prevCartItems => ({ 
      ...prevCartItems, 
      [itemId]: prevCartItems[itemId] > 0 ? prevCartItems[itemId] - 1 : 0 
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount; 
  };


  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item]; 
    }
    return totalItems;
  };

  const contextValue = { 
    getTotalCartAmount, 
    getTotalCartItems, 
    all_product, 
    cartItems, 
    addToCart, 
    removeFromCart 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
