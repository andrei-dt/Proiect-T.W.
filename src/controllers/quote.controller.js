const db = require("../models");
const Quote = db.quotes;
const Translation = db.translations;
const Op = db.Sequelize.Op;

// Create and save a new quote
exports.create = (req, res) => {
    // Validate request
    if (!req.body.quote) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a quote
    let quote = {
        quoteText: req.body.quote,
        quoteAuthor: req.body.author,
        translations: []
    };
    if (req.body.translations && req.body.translations.length > 0) {
        quote.translations = [{
            translationText: req.body.translations[0].translation,
            translationSource: req.body.translations[0].source,
            translationLang: req.body.translations[0].lang
        }];
    }

    // Save quote in the database
    Quote.create(quote, {
            include: [Translation]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the quote."
            });
        });
};

// Add translation
exports.addTranslation = (req, res) => {
    // Validate request
    if (!req.body.translation || !req.body.quoteId || !req.body.lang) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a translation
    const translation = {
        translationText: req.body.translation,
        translationSource: req.body.source,
        translationLang: req.body.lang,
        quoteId: req.body.quoteId
    };

    // Save translation in the database
    Translation.create(translation)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving translation."
            });
        });
};

// Retrieve all quotes from the database.
exports.findAll = (req, res) => {
    const q = req.query.q;
    var condition = q ? {
        quoteText: {
            [Op.like]: `%${q}%`
        }
    } : null;

    Quote.findAll({ where: condition, include: Translation })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving quotes."
            });
        });
};

// Find a single quote with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Quote.findByPk(id, { include: Translation })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find quote with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving quote with id=" + id
            });
        });
};

// Update a quote by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Quote.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Quote was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update quote with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating quote with id=" + id
            });
        });
};

// Delete a quote with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Quote.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Quote was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete quote with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete quote with id=" + id
            });
        });
};

// Delete all quotes from the database.
exports.deleteAll = (req, res) => {
    Quote.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Quotes were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all quotes."
            });
        });
};


exports.deleteTranslation = (req, res) => {
    const id = req.params.id;

    Translation.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Translation was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete translation with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete translation with id=" + id
            });
        });
};