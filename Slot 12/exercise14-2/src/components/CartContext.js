// CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dish.id);

      if (existingItem) {
        // Nếu món ăn đã có trong giỏ, tăng số lượng
        return prevItems.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Nếu món ăn chưa có, thêm vào giỏ với số lượng là 1
        return [...prevItems, { ...dish, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    const idToRemove = parseInt(id, 10); //vẫn nên parseInt để đảm bảo
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== idToRemove)
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };
    // Tính tổng giá trị (cần sửa lại để tính cả số lượng)
  const totalValue = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  ).toFixed(2);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalValue }}
    >
      {children}
    </CartContext.Provider>
  );
};