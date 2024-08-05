import React, { useState } from "react";
import Home from "./paginas/home/Home";
import "./App.css";

function App() {

  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }

  return (
    <Home></Home>

  );
}

export default App;
