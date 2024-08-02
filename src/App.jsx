import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";


const App = () => {
  
  const [card,setCard] = useState([])

  function addToCard(item){
    setCard([...card,item])
  }
  
  function deleteToCard(itemToRemove) {
    const index = card.findIndex(item => item === itemToRemove);
    if (index !== -1) {
      setCard([
        ...card.slice(0, index),
        ...card.slice(index + 1)
      ]);
    }
  }

  return (
    <div>
      <Header length={card.length}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCard ={addToCard}/>} />
        <Route path="/card" element={<Card card={card} deleteToCard={deleteToCard}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
