import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:6001/plants")
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Request Failed with status " + r.status);
        }
      })
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => console.error(error));
  }, []);

  function onAdd(plant) {
    setIsLoading(true);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plant),
    })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Request failed with status " + r.status);
        }
      })
      .then((data) => {
        setPlants((prevData) => [...prevData, data]);
      })
      .catch((error) => console.error(error));
  }

  return (
    <main>
      <NewPlantForm addPlant={onAdd} />
      <Search onSearch={setSearchString} />
      {isLoading ? <div>Loading...</div> : <></>}
      {plants.length > 0 ? (
        <PlantList filter={searchString} plants={plants} />
      ) : (
        <></>
      )}
    </main>
  );
}

export default PlantPage;
