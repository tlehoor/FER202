// src/Cart.js
import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { ListGroup, Button, Alert } from "react-bootstrap";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalValue } =
    useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    setTimeout(() => {
      setShowSuccess(true);
      clearCart();
    }, 1000);
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {/* Hiển thị số lượng */}
                {item.name} - ${parseFloat(item.price).toFixed(2)} x {item.quantity}
                <Button
                  variant="danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-3">
            {/* Hiển thị tổng số món (không phải số item riêng lẻ) */}
            <p>Tổng số món: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p>Tổng giá trị: ${totalValue}</p>
            <Button variant="warning" onClick={clearCart} className="me-2">
              Clear Cart
            </Button>
            <Button variant="success" onClick={handleCheckout}>
              Xác nhận đơn hàng
            </Button>
          </div>
        </div>
      )}

      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible className="mt-3">
          Thanh toán thành công! Đơn hàng của bạn đã được xác nhận.
        </Alert>
      )}
    </div>
  );
};

export default Cart;