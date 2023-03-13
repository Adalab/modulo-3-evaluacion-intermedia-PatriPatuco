import { useState } from "react";
import api from "../data/api.json";
import '../styles/App.scss';

function App() {
  /* VARIABLES ESTADO (DATOS) */
const [data, setData] = useState(api);
/* const [quotes, setQuotes] = useState(""); */
  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderQuotes = () => {
    return data.map((eachQuote, index) => (
      <li className="quote-item" key={index}>
        <p className="quote-p">
          {eachQuote.quote} - <span className="char-name">{eachQuote.character}</span>
        </p>
      </li>
    ));
  }

  /* HTML */
  return (
    <div className="App">
      <section className="header">
        <h1 className="main-title">Frases de Friends</h1>
        <form action="">
          <label htmlFor="search-quote" className="search">Filtrar por frase</label>
          <input type="text" className="search-quote in-search" />
          <label htmlFor="search-char" className="search">Filtrar por personaje</label>
          <select className="search-char in-search">
            <option value="Ross">Ross</option>
            <option value="Joey">Joey</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Chandler">Chandler</option>
            <option value="Rachel">Rachel</option>
          </select>
        </form>
      </section>
      <main>
        <ul className="quotes-list">
          {renderQuotes()}
        </ul>
      </main>
    </div>
  );
}

export default App;
