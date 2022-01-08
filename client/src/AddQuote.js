import React, { useState } from 'react';

export function AddQuote(props) {
    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    const [lang, setLang] = useState('ro');
    const [translationText, setTranslationText] = useState('');

    const reset = () => {
        setQuoteText('');
        setQuoteAuthor('');
        setLang("ro");
        setTranslationText('');
    }

    const handleTranslate = () => {
        const body = {
            lang: lang,
            text: quoteText
        };
        fetch("http://localhost:8080/api/translate", {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    alert(response.message);
                } else setTranslationText(response.translation);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleSave = (ev) => {
        ev.preventDefault();
        const translations = translationText ? [{ translation: translationText, lang: lang, source: 'auto' }] : []
        const body = {
            quote: quoteText, author: quoteAuthor, translations: translations

        };
        fetch("http://localhost:8080/api/quotes", {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    alert(response.message);
                } else {
                    reset();
                    props.onAdd(response);
                }
            })
            .catch(err => {
                console.log(err);
            });

    }
    return <form onSubmit={e => e.preventDefault()}>
        <p style={{ marginTop: 0 }}>
            <label>
                Quote:
                <textarea placeholder="Quote here..." className="quote-input" value={quoteText} onChange={(ev) => setQuoteText(ev.target.value)}></textarea>
            </label>
        </p>

        <p>
            <label>
                Author:
                <input placeholder="Author here..." className="quote-input" type="text" value={quoteAuthor} onChange={(ev) => setQuoteAuthor(ev.target.value)} />
            </label>
        </p>
        <div className="quote-translation" style={{ marginBottom: '10px', overflow: 'auto' }}>
            <textarea value={translationText} onChange={(ev) => setTranslationText(ev.target.value)} placeholder="Translation here..." className="quote-input"></textarea>
            <div style={{ float: 'right' }}>
                <button className='btn' onClick={() => handleTranslate()}>Translate</button>
                <select value={lang} onChange={(ev) => setLang(ev.target.value)}>
                    {props.langs.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                </select>
            </div>
        </div>

        <div style={{ float: 'clear' }}>
            <button className='btn' onClick={() => reset()}>Reset</button>
            <button className='btn' style={{ float: 'right', fontSize: '16px' }} onClick={(ev) => handleSave(ev)}>Save</button>
        </div>
    </form>;
}
