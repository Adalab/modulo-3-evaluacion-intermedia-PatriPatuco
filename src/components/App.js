import { useState } from "react";
import api from "../data/api.json";
import "../styles/App.scss";

function App() {
  const [data, setData] = useState(api);
  const [quotes, setQuotes] = useState("");
  const [character, setCharacter] = useState ("Todos");

  /* --PRINT LIST-- */
  const renderQuotes = () => {

    /* Filter to show the quotes matching the user quote search */
    return data
    .filter ((eachQuote) => {
      return eachQuote.quote.toLowerCase().includes(quotes.toLowerCase());
    })
    .map((eachQuote, index) => (
      <li className="quote-item" key={index}>
        <p className="quote-p">
          {eachQuote.quote} -{" "}
          <span className="char-name">{eachQuote.character}</span>
        </p>
      </li>
    ));
  };

  const handleQuote = (ev) => {
    setQuotes(ev.target.value);
  };

  /* HTML */
  return (
    <div className="App">
      <section className="header">
        <h1 className="main-title">Frases de Friends</h1>
        <form action="">
          <label htmlFor="search-quote" className="search">
            Filtrar por frase
          </label>
          <input 
          type="text" 
          className="search-quote in-search"
          value={quotes}
          onChange={handleQuote} />
          <label htmlFor="search-char" className="search">
            Filtrar por personaje
          </label>
          <select className="search-char in-search">
            <option value="Todos">Todos</option>
            <option value="Ross">Ross</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Chandler">Chandler</option>
            <option value="Rachel">Rachel</option>
          </select>
        </form>
      </section>
      <main>
        <ul className="quotes-list">{renderQuotes()}</ul>
      </main>
    </div>
  );
}

export default App;
