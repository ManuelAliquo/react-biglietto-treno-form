export default function App() {
  return (
    <div className="container mt-5 fw-semibold">
      <div className="ticket-generation">
        <h1 className="h2 text-center mb-4">Genera il tuo biglietto</h1>
        <form
          id="passenger-form"
          name="passenger-form"
          className="row row-cols-1 row-cols-md-3 border rounded-4 py-3 mx-2"
        >
          <div className="col">
            <label htmlFor="passenger-name" className="form-label">
              Inserisci Nome e Cognome:
            </label>
            <div className="input-group">
              <input
                id="passenger-name"
                type="text"
                placeholder="Nome Cognome"
                className="form-control mb-3"
                required
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="passenger-km" className="form-label">
              Inserisci la percorrenza:
            </label>
            <div className="input-group">
              <input
                id="passenger-km"
                type="number"
                placeholder="In 'Km'"
                className="form-control mb-3"
                min="0"
                required
              />
              <span className="input-group-text mb-3">Km</span>
            </div>
          </div>
          <div className="col">
            <label htmlFor="passenger-age" className="form-label">
              Inserisci la tua fascia d'Età:
            </label>
            <select id="passenger-age" name="age" className="form-select mb-3" required>
              <option value="">Scegli tra:</option>
              <option value="Minorenne">Minorenne</option>
              <option value="Maggiorenne">Maggiorenne</option>
              <option value="Over-65">Over-65</option>
            </select>
          </div>
          <button id="submit-btn" className="btn btn-danger rounded-pill mx-auto">
            Invia
          </button>
        </form>
      </div>
    </div>
  );
}
