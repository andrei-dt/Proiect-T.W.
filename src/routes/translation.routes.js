module.exports = app => {
    const translations = require("../controllers/translation.controller.js");

    var router = require("express").Router();

    // translate a text, params:  text, lang
    router.post("/", translations.translateText);

    // retrieve supported langs
    router.get("/langs", translations.getAvailableLangs);

    app.use('/api/translate', router);
};