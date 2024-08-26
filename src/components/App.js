import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "../db.json";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType (type) {
    setFilters({ ...filters, type });
  };

  function onFindPetsClick () {
    const filteredPets = filters.type === "all" 
      ? data.pets 
      : data.pets.filter(pet => pet.type === filters.type);
    setPets(filteredPets);
  };

  function onAdoptPet(petId) {
    const updatedPets = pets.map(pet =>
      pet.id === petId ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filters={filters} onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;