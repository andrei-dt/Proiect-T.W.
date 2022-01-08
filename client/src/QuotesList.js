import React, { useState } from 'react';

function QuoteItem(props) {
    const quote = props.value;
    const [quoteText, setQuoteText] = useState(quote.quoteText);
    const [lang, setLang] = useState('ro');
    const [translationText, setTranslationText] = useState('');
    const [addTranslation, setAddTranslation] = useState(false);
    const [translation, setTranslation] = useState(quote.translations.length > 0 ? quote.translations.sort((a, b) => new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime())[0] : undefined);

    const hideTranslation = () => {
        setAddTranslation(false);
        setLang("ro");
        setTranslationText('');
    }

    const handleTranslate = () => {
        const body = {
            lang: lang,
            text: quote.quoteText
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


    const handleSave = () => {
        const body = {
            translation: translationText, lang: lang, source: 'auto', quoteId: quote.id
        };
        fetch("http://localhost:8080/api/quotes/add-translation", {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    alert(response.message);
                } else {
                    hideTranslation();
                    setTranslation(response);
                }
            })
            .catch(err => {
                console.log(err);
            });

    }
    return <li className={`quote-item`} key={quote}>
        <div className={`quote-text  ${translation ? "active" : ""}`} title={translation ? "Click to see last translation" : "Missing translation"} onClick={() => setQuoteText(quoteText === quote.quoteText && translation ? translation.translationText : quote.quoteText)}>“{quoteText}”</div>
        <div className="quote-author">{quote.quoteAuthor}</div>
        {!addTranslation ? <div className="quote-actions">
            {!translation ? <button className='btn btn-add-translation' onClick={() => setAddTranslation(true)}>Add translation</button> : null}
            <button className='btn btn-remove' onClick={() => props.onRemove(quote.id)}>Remove</button>
        </div> : null}
        {addTranslation ? <div className="quote-translation">
            <textarea value={translationText} onChange={(ev) => setTranslationText(ev.target.value)} placeholder="Translation here..." className="quote-input"></textarea>
            <div className="quote-translation-actions">
                <button className='btn' onClick={() => hideTranslation()}>Cancel</button>
                <div>
                    <button className='btn' onClick={() => handleTranslate()}>Translate</button>
                    <select value={lang} onChange={(ev) => setLang(ev.target.value)}>
                        {props.langs.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                    </select>
                    <button className='btn' onClick={() => handleSave()}>Save</button></div>
            </div>
        </div> : null}
    </li>;
}

export function QuotesList(props) {
    const quotes = props.quotes;
    const listItems = quotes.map((quote) =>
        <QuoteItem key={quote.id.toString()} value={quote} langs={props.langs} onRemove={(id) => props.onRemove(id)} />);
    return (
        <ul className="quotes-list">
            {listItems}
        </ul>
    );
}
