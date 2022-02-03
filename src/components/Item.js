import React, { useState } from "react";

function Item({ name, category }) {

  const [status, setCartStatus] = useState(true)

  const cartClass = status ? "":"in-cart"

  const cartStatus = status ? "Add to Cart":"Remove From Cart"

  function addToCart(){
    setCartStatus(!status); 
    
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{cartStatus}</button>
    </li>
  );
}

export default Item;
