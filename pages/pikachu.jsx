import { useState, useEffect } from "react";
import PikachuModel from "../module/PikachuModel/PikachuModel";
import PikachuForm from "../module/PikachuForm/PikachuForm";

export default function Pikachu() {
  const [marker, setMarker] = useState(() => {
    const savedMarkers = localStorage.getItem("markers");
    return savedMarkers ? JSON.parse(savedMarkers) : [];
  });

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

  return (
    <div>
      <PikachuForm
        onAddMarker={handleAddMarker}
        onClearMarkers={handleClearMarkers}
        onRemoveLastMarker={handleRemoveLastMarker}
      />
      <PikachuModel marker={marker} />
    </div>
  );
}
