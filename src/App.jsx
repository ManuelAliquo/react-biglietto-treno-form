import { useState } from "react";

export default function App() {
  const [newName, setNewName] = useState("");
  const [newKms, setNewKms] = useState("");
  const [selectedAge, setSelectedAge] = useState("");

  //* form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //* inputs + select change
  const handleNameChange = (e) => setNewName(e.target.value);
  const handleKmsChange = (e) => {
    if (e.target.value === "" || e.target.value <= 0) {
      setNewKms("");
    } else {
      setNewKms(parseInt(e.target.value));
    }
  };
  const handleSelect = (e) => setSelectedAge(e.target.value);

  return (
    <div className="container mt-5 fw-semibold">
      <h1 className="h2 text-center mb-4">Genera il tuo biglietto</h1>
      <form
        onSubmit={handleSubmit}
        id="passenger-form"
        name="passenger-form"
        className="row row-cols-1 row-cols-md-3 border rounded-4 py-3 mx-auto"
      >
        {/* NAME */}
        <div className="col">
          <label htmlFor="name" className="form-label">
            Inserisci Nome e Cognome:
          </label>
          <div className="input-group">
            <input
              value={newName}
              onChange={handleNameChange}
              id="name"
              type="text"
              placeholder="Nome Cognome"
              className="form-control mb-3"
              required
            />
          </div>
        </div>

        {/* KM */}
        <div className="col">
          <label htmlFor="km" className="form-label">
            Inserisci la percorrenza:
          </label>
          <div className="input-group">
            <input
              value={newKms}
              onChange={handleKmsChange}
              id="km"
              type="number"
              placeholder="In 'Km'"
              className="form-control mb-3"
              min="1"
              required
            />
            <span className="input-group-text mb-3">Km</span>
          </div>
        </div>

        {/* AGE */}
        <div className="col">
          <label htmlFor="age" className="form-label">
            Inserisci la tua fascia d'Età:
          </label>
          <select
            value={selectedAge}
            onChange={handleSelect}
            id="age"
            className="form-select mb-3"
            required
          >
            <option value="">Scegli tra:</option>
            <option value="Minorenne">Minorenne</option>
            <option value="Maggiorenne">Maggiorenne</option>
            <option value="Over-65">Over-65</option>
          </select>
        </div>

        <button className="btn btn-danger rounded-pill mx-auto">Invia</button>
      </form>
    </div>
  );
}
