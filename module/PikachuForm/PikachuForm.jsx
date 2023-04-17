export default function PikachuForm({ onAddMarker, onClearMarkers, onRemoveLastMarker }) {
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

      <button type="submit">Agregar marcador</button>
      <button type="button" onClick={onClearMarkers}>Borrar Todo</button>
      <button type="button" onClick={onRemoveLastMarker}>Eliminar último marcador</button>
    </form>
  );
}