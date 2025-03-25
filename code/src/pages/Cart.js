import React, { useState } from "react";
import { Container, Button, Table, Form, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";
import "../style/Cart.css";

const Cart = ({ cart, setCart, user }) => {
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && (item.quantity || 1) > 1
        ? { ...item, quantity: (item.quantity || 1) - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const handleCheckout = async () => {
    try {
      if (!user || !user.id) {
        alert("User information is missing. Please log in to checkout.");
        return;
      }

      if (cart.length === 0) {
        alert("Your cart is empty. Add some items before checking out.");
        return;
      }

      const response = await axios.post("http://localhost:3001/orders", {
        userId: user.id,
        items: cart,
        total: calculateTotal(),
        date: new Date().toISOString(),
      });
      alert("Checkout successful!");
      setCart([]);
    } catch (error) {
      console.error("Checkout error:", error.response || error.message || error);
      alert(
        `Checkout failed: ${
          error.response?.data?.message || error.message || "Unknown error"
        }. Please try again.`
      );
    }
  };

  const isAdmin = user?.role === "admin";

  return (
    <div className="cart-page">
      <Container>
        <h1 className="cart-title">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <Table striped bordered hover responsive className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => decreaseQuantity(item.id)}
                        className="quantity-btn"
                        disabled={isAdmin} // Vô hiệu hóa nếu là admin
                      >
                        -
                      </Button>
                      <span className="quantity-display">
                        {item.quantity || 1}
                      </span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => increaseQuantity(item.id)}
                        className="quantity-btn"
                        disabled={isAdmin} 
                      >
                        +
                      </Button>
                    </td>
                    <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                        disabled={isAdmin} // Vô hiệu hóa nếu là admin
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="cart-summary">
              <h3>Total: ${calculateTotal()}</h3>
              {!isAdmin && (
                <Button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </Button>
              )}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

export default Cart;