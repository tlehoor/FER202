import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Ex3() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Counter: {count}</h2>
      <button
        className="btn btn-primary me-2"
        onClick={increment}
      >
        <i class="bi bi-arrow-up"></i>
      </button>
      <button
        className="btn btn-danger"
        onClick={decrement}
      >
        <i class="bi bi-arrow-down"></i>
      </button>
    </div>
  );
}

export default Ex3;