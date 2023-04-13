import { useState } from "react";

export default function Form({ onSubmit }) {
  const [formState, setFormState] = useState({ x: 0, y: 0, z: 0 });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: parseFloat(value) }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        X:
        <input type="number" placeholder="0.00" step="any" name="x" onChange={handleChange} />
      </label>
      <label>
        Y:
        <input type="number" placeholder="0.00" step="any" name="y" onChange={handleChange} />
      </label>
      <label>
        Z:
        <input type="number" placeholder="0.00" step="any" name="z" onChange={handleChange} />
      </label>
      <button type="submit">Agregar punto</button>
    </form>
  );
}
