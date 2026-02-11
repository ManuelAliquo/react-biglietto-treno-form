import { useState } from "react";

export default function App() {
  // array per i dati dei biglietti
  const [ticketInfos, setTicketInfos] = useState([]);

  //* stati
  const [newName, setNewName] = useState("");
  const [newKms, setNewKms] = useState("");
  const [selectAge, setSelectAge] = useState("");

  //* inputs + select change
  const handleNameChange = (e) => setNewName(e.target.value);

  const handleKmsChange = (e) => {
    const kmsValue = e.target.value;
    setNewKms(kmsValue === "" || kmsValue <= 0 ? "" : parseInt(kmsValue));
  };

  const handleSelect = (e) => setSelectAge(e.target.value);

  //* form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // logica per il prezzo
    const price = newKms * 0.21;
    let finalPrice = price;
    if (selectAge === "Minorenne") finalPrice = price * 0.8;
    if (selectAge === "Over-65") finalPrice = price * 0.6;

    const newTicket = {
      name: newName.trim(),
      km: newKms + "Km",
      promo: selectAge,
      price: finalPrice.toFixed(2) + "€",
    };

    setTicketInfos([...ticketInfos, newTicket]);

    // svuoto i campi
    setNewName("");
    setNewKms("");
    setSelectAge("");
  };

  return (
    <>
      <h1 className="h2 text-center mt-4">Genera il tuo biglietto</h1>
      <div className="container d-flex flex-column align-items-center gap-5 my-4">
        {/* Form */}

        {ticketInfos.length === 0 && (
          <form
            onSubmit={handleSubmit}
            id="passenger-form"
            name="passenger-form"
            className="row row-cols-1 row-cols-md-3 border rounded-4 py-3 mx-auto"
          >
            {/* NAME */}
            <div className="col">
              <label htmlFor="name" className="form-label ps-1">
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
              <label htmlFor="km" className="form-label ps-1">
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
                  max="5000"
                  required
                />
                <span className="input-group-text mb-3">Km</span>
              </div>
            </div>

            {/* AGE */}
            <div className="col">
              <label htmlFor="age" className="form-label ps-1">
                Inserisci la tua fascia d'Età:
              </label>
              <select
                value={selectAge}
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

            <button className="submit-btn btn btn-danger rounded-pill mx-auto">Invia</button>
          </form>
        )}

        {/* Ticket */}

        {
          // mostro il biglietto solo se ce n'è almeno uno nell'array
          ticketInfos.length > 0 && (
            <div className="ticket-container border rounded-4 p-3">
              <div className="border-bottom mb-4">
                <h2 className="h3 text-center mb-3">Il tuo Biglietto</h2>
              </div>
              <div className="d-flex gap-3 justify-content-between align-items-center">
                {ticketInfos.map((ticketInfo, index) => (
                  <div key={index}>
                    <div className="mb-2 text-muted">
                      Passeggero: <br /> <strong>{ticketInfo.name}</strong>
                    </div>
                    <div className="mb-2 text-muted">
                      Distanza: <br /> <strong>{ticketInfo.km}</strong>
                    </div>
                    <div className="mb-2 text-muted">
                      Offerta: <br /> <strong>{ticketInfo.promo}</strong>
                    </div>
                    <div className="text-muted">
                      Prezzo: <strong>{ticketInfo.price}</strong>
                    </div>
                  </div>
                ))}
                <div className="vr"></div>
                <div className="qr-code border rounded-3">
                  <img className="img-fluid" src="src/assets/img/qrcode.svg" alt="QR Code" />
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}
