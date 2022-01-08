import React, { useState, useEffect } from 'react';
import './App.css';
import { QuotesList } from './QuotesList';
import { AddQuote } from './AddQuote';

function App() {
  const [quotes, setQuotes] = useState([]);

  const [langs, setLangs] = useState([]);
  useEffect(() => {
    getQuotes();
    fetch("http://localhost:8080/api/translate/langs", {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        setLangs(response.languages);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  const handleRemove = (id) => {
    fetch(`http://localhost:8080/api/quotes/${id}`, {
      "method": "DELETE",
    })
      .then(response => response.json())
      .then(response => {
        if (response.message) {
          alert(response.message);
        }
        getQuotes();
      })
      .catch(err => {
        console.log(err);
      });
  }
  const getQuotes = () => {
    fetch("http://localhost:8080/api/quotes", {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        setQuotes(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const onAdd = (item) => {
    const _quotes = [...quotes];
    _quotes.push(item);
    setQuotes(_quotes);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Manager</h1>
      </header>
      <section className="App-content">
        <div className="App-col App-quotes">
          <h6>Quotes</h6>
          <QuotesList langs={langs} quotes={quotes} onRemove={(id) => handleRemove(id)} />,
        </div>
        <div className="App-col App-quote">
          <h6>Add quote</h6>
          <AddQuote langs={langs} onAdd={(item) => onAdd(item)} />
        </div>
      </section>
    </div>
  );
}

export default App;

