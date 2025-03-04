// src/App.js
import React, { useContext } from "react"; // import useContext
import { CartProvider } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import { Container, Button } from 'react-bootstrap';
import { ThemeContext } from "./components/ThemeContext"; // Import

const dishes = [
    {
      id: 0,
      name: "Uthappizza",
      image: "uthappizza.jpg",
      price: "4.99",
      description: "A unique combination of Indian Uthappam and Italian pizza.",
    },
    {
      id: 1,
      name: "Zucchipakoda",
      image: "frittelle+di+zucchine.jpg",
      price: "1.99",
      description: "Deep fried Zucchini with chickpea batter.",
    },
    {
      id: 2,
      name: "Vadonut",
      image: "2-m-202405140354.jpg",
      price: "1.99",
      description: "A combination of vada and donut.",
    },
    {
      id: 3,
      name: "ElaiCheese Cake",
      image: "AR-155222-philadelphia-classic-cheesecake-4x3-hero-5e8c2187a57a4016b5934058ad7d9b5e.jpg",
      price: "2.99",
      description: "New York Style Cheesecake with Indian cardamoms.",
    },
  ];

  function App() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Sử dụng context

  return (

      <Container className={darkMode ? "dark-mode-content" : ""}>
        <div className="d-flex justify-content-end mb-3">
          <Button variant={darkMode ? "light" : "dark"} onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
        <DishesList dishes={dishes} />
        <hr />
        <Cart />
      </Container>

  );
}

export default App;