import { useState } from "react";
import api from "../data/api.json";
import "../styles/App.scss";

function App() {
  const [data, setData] = useState(api);
  const [quotes, setQuotes] = useState("");
  const [characters, setCharacters] = useState("Todos");
  const [newQuote, setNewQuote] = useState("");
  const [newCharacter, setNewCharacter] = useState("");


  /* --PRINT LIST-- */
  const renderQuotes = () => {
    /* Filter the quotes matching the user quote search */
    return (
      data
        .filter((eachSearch) => {
          return eachSearch.quote.toLowerCase().includes(quotes.toLowerCase());
        })

        /* Filter the quotes marching the user characters search */
        .filter((eachCharacter) => {
          if (characters === "Todos") {
            return data;
          } else if (eachCharacter.character === characters) {
            return eachCharacter;
          }
        })

        .map((eachQuote, index) => (
          <li className="quote-item" key={index}>
            <p className="quote-p">
              {eachQuote.quote} -{" "}
              <span className="char-name">{eachQuote.character}</span>
            </p>
          </li>
        ))
    );
  };

  const handleQuote = (ev) => {
    setQuotes(ev.target.value);
  };

  const handleCharacters = (ev) => {
    setCharacters(ev.target.value);
  };

  const handleNewQuote = (ev) => {
    setNewQuote(ev.target.value);
  };

  const handleNewCharacter = (ev) => {
    setNewCharacter(ev.target.value);
  };

  const handleAddButton = (ev) => {
    ev.preventDefault();
    setData([...data, { quote: newQuote, character: newCharacter }]);
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
            onChange={handleQuote}
          />
          <label htmlFor="search-char" className="search">
            Filtrar por personaje
          </label>
          <select
            className="search-char in-search"
            value={characters}
            onChange={handleCharacters}
          >
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

        <section className="add-quote-section">
          <h2 className="main-title">Añadir una nueva frase</h2>
          <label htmlFor="add-quote add-section">Frase</label>
          <input
            type="text"
            className="add-quote in-add"
            value={newQuote}
            onChange={handleNewQuote}
          />
          <label htmlFor="add-character add-section">Personaje</label>
          <input
            type="text"
            className="add-character in-add"
            value={newCharacter}
            onChange={handleNewCharacter}
          />
          <input
            className="add-button"
            type="button"
            value="Añadir nueva frase"
            onClick={handleAddButton}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
