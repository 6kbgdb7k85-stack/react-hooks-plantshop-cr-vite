import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ filter, plants }) {
  const [filteredPlants, setFilteredPlants] = useState(plants);

  useEffect(() => {
    if (filter === "") {
      setFilteredPlants(plants);
    } else {
      setFilteredPlants(
        plants.filter((plant) =>
          plant.name.toLowerCase().includes(filter.toLowerCase()),
        ),
      );
    }
  }, [filter, plants]);

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
