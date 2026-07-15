import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;
  const [inStock,setInStock]=useState(true);


  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={()=>setInStock(prevState=>!prevState)} className="primary">In Stock</button>
      ) : (
        <button onClick={()=>setInStock(prevState=>!prevState)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
