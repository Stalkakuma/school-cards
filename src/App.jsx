import { useState } from "react";
import "./App.css";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

function App() {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const [print, setPrint] = useState(false);
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }), setPrint(false));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrint(true);
  };

  return (
    <article>
      <h1>React Credit Cards</h1>
      <h3>Beutiful credit cards for your payment forms</h3>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <span>E.g.: 49.., 51.., 36.., 37.. </span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div className="div__row">
          <input
            type="text"
            name="expiry"
            placeholder="Valid Thru"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <button type="submit">PAY</button>
      </form>
      {print && (
        <section>
          <p>number: {state.number}</p>
          <p>name: {state.name}</p>
          <p>expiry: {state.expiry}</p>
          <p>cvc: {state.cvc}</p>
          <p>issuer: </p>
        </section>
      )}
    </article>
  );
}

export default App;
