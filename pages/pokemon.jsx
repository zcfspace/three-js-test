import { useState, useEffect } from "react";
import Model from "../module/Model/Model";
import Form from "../module/Form/Form";

export default function Pokemon() {
  const [marker, setMarker] = useState(() => {
    const savedMarkers = localStorage.getItem("markers");
    return savedMarkers ? JSON.parse(savedMarkers) : [];
  });

  const [selectedPokemonUrl, setSelectedPokemonUrl] =
    useState("./stl/pikachu.stl");

  useEffect(() => {
    localStorage.setItem("markers", JSON.stringify(marker));
  }, [marker]);

  function handleAddMarker(newMarker) {
    setMarker([...marker, newMarker]);
  }

  function handleClearMarkers() {
    setMarker([]);
    localStorage.removeItem("markers");
  }

  function handleRemoveLastMarker() {
    setMarker(marker.slice(0, -1));
  }

  function handleSelectPokemon(event) {
    const url = event.target.value;
    setSelectedPokemonUrl(url);
  }

  return (
    <div>
      <Form
        onAddMarker={handleAddMarker}
        onClearMarkers={handleClearMarkers}
        onRemoveLastMarker={handleRemoveLastMarker}
        onSelectPokemon={handleSelectPokemon}
      />
      <Model marker={marker} url={selectedPokemonUrl} />
    </div>
  );
}
