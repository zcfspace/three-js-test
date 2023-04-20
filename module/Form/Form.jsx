export default function Form({
  onAddMarker,
  onClearMarkers,
  onRemoveLastMarker,
  onSelectPokemon,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const xPosition = parseFloat(event.target.elements.xPosition.value);
    const yPosition = parseFloat(event.target.elements.yPosition.value);
    const zPosition = parseFloat(event.target.elements.zPosition.value);

    onAddMarker({ x: xPosition, y: yPosition, z: zPosition });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="xPosition">X Position:</label>
      <input type="number" id="xPosition" name="xPosition" />
      <label htmlFor="yPosition">Y Position:</label>
      <input type="number" id="yPosition" name="yPosition" />
      <label htmlFor="zPosition">Z Position:</label>
      <input type="number" id="zPosition" name="zPosition" />

      <select name="pokemon" id="pokemon" onChange={onSelectPokemon}>
        <option value="./stl/pikachu.stl">Pikachu</option>
        <option value="./stl/charizard.stl">Charizard</option>
        <option value="./stl/dragonite.stl">Dragonite</option>
        <option value="./stl/snorlax.stl">Snorlax</option>
      </select>

      <button type="submit">Agregar marcador</button>

      <button type="button" onClick={onClearMarkers}>
        Borrar Todo
      </button>
      <button type="button" onClick={onRemoveLastMarker}>
        Eliminar último marcador
      </button>
    </form>
  );
}
