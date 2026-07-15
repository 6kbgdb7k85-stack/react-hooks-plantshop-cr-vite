import React, { useState } from "react";

function NewPlantForm({addPlant}) {
  const [plantForm,setPlantForm]=useState({
    name:'',
    image:'',
    price:''
  })

  function handleChange({target}){
    setPlantForm(prevState=>({
      ...prevState,
      [target.name]:target.value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();
    addPlant(plantForm);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
