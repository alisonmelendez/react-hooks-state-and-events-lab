import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterByCategory, setFilterCategory] = useState("All")

  function pickCategory(event){ 
    setFilterCategory(event.target.value); //this is grabbing what we selected
  }

  const filteredItems = items.filter((item)=>{
    //if category matches selected category 
    if(filterByCategory === 'All'){ 
      return true;
    } else {
      return item.category === filterByCategory
    }
    
  })

//need to change the array that we're mapping through below because that 
//is what is actually setting the items onto our page!
//so we're mapping through a different set of data now
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={pickCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
