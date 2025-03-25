import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pokemon from "./pages/Pokemon";
import Character from "./pages/Character";
import Login from "./pages/Login";
import Gameplay from "./pages/Gameplay";
import Shop from "./pages/Shop";
import AddProduct from "./pages/AddProduct";

// Component bảo vệ route
const ProtectedRoute = ({ user, children }) => {
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const App = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    console.log("Cart state updated:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    if (localStorage.getItem("user")) {
      console.error("Failed to clear localStorage. Forcing clear...");
      localStorage.clear();
    }
  };

  const handleLogin = (user) => {
    console.log("User logged in:", user);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    if (!user && localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      {user && <Navigation onLogout={handleLogout} user={user} cart={cart} />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pokemon"
          element={
            <ProtectedRoute user={user}>
              <Pokemon />
            </ProtectedRoute>
          }
        />
        <Route
          path="/character"
          element={
            <ProtectedRoute user={user}>
              <Character />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gameplay"
          element={
            <ProtectedRoute user={user}>
              <Gameplay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute user={user}>
              <Shop cart={cart} setCart={setCart} user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute user={user}>
              <Cart cart={cart} setCart={setCart} user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/add-product"
          element={
            <ProtectedRoute user={user}>
              <AddProduct user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;