# Proiect : 24.Quote Manager integrat cu google translate api

## I. Backend (NodeJS)
---
1. Detalii
    - biblioteci: _ExpressJS, Sequelize (ORM), mariaDB, Google Translate API_
    - entitati: _Quote, Translate_

    ![alt text](./assets/images/diagram.png "Logo Title")

    - doua controllere (quote - _CRUD_, translation - _Google Translate API_), ce permit salvarea de citate si traducerea acestora din/in mai multe limbi, printre care si limba romana, utilizand Google Translate
    - la salvarea unui citat, este posibila adaugarea unei traduceri optional
    - se pot adauga traduceri dupa salvarea unui citat
    - se pot sterge atat citate cat si traduceri
    - se pot modifica citatele
    - se listeaza citatele cu traducerile aferente
2. Rulare
    - instalare _NodeJS_
    - instalare biblioteci: ```npm install```
    - modificare fisier `src/config/db.config.js` pentru conectarea la baza de date HeidiSQL
    - rulare server: ```npm start```
    - accesare RESTful: http://localhost:8080
    - rute

        | Actiune       | Metoda       | Ruta                          | Parametrii|
        | ------------- |:-------------| :-----------------------------| ---|
        | salvare citat | POST         | `/api/quotes`                 | JSON: quote, author, translations [translationText, translationLang, translationSource] |
        | adaugare traducere | POST         | `/api/quotes/add-translation` | JSON: translationText, translationLang, translationSource, quoteId |
        | listare citate | GET          | `/api/quotes`                 ||
        | afisare citat | GET          | `/api/quotes/:id`             ||
        | actualizare citat | PUT          | `/api/quotes/:id`             | JSON: quote, author|
        | stergere citat | DELETE       | `/api/quotes/:id`             ||
        | stergere traducere | DELETE       | `/api/quotes/translation/:id` ||
        | stergere citate | DELETE       | `/api/quotes`                 ||
        | traducere text | POST         | `/api/translate`              | JSON: text, lang |
        | listare limbi suportate | GET          | `/api/translate/langs`        |
 
 

## II. Frontend (ReactJS)
Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

