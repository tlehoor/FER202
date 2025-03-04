import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from "./components/Exercise1.js";
import ChangeNameAge from "./components/Exercise2.js";
import ItemList from "./components/Exercise3.js";
import ItemListUpdate from "./components/Exercise4.js";
import QuestionBank from "./components/Exercise5.js";
import QuestionBankUpdate from "./components/Exercise6.js";



function App() {
  return (
    <div>
      <Counter />
      <ChangeNameAge />
      <ItemList />
      <ItemListUpdate />
      <QuestionBank />
      <QuestionBankUpdate />

    </div>
  );
}

export default App;

