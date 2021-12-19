module.exports = app => {
    const quotes = require("../controllers/quote.controller.js");

    var router = require("express").Router();

    // Create a new quote
    router.post("/", quotes.create);

    // Add translation to quote
    router.post("/add-translation", quotes.addTranslation);

    // Retrieve all quotes
    router.get("/", quotes.findAll);

    // Retrieve a single quote with id
    router.get("/:id", quotes.findOne);

    // Update a quote with id
    router.put("/:id", quotes.update);

    // Delete a quote with id
    router.delete("/:id", quotes.delete);

    // Delete a translation with id
    router.delete("/translation/:id", quotes.deleteTranslation);

    // Delete all quotes
    router.delete("/", quotes.deleteAll);

    app.use('/api/quotes', router);
};