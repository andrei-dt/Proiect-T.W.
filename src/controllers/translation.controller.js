const googleTranslate = require('google-translate')('AIzaSyB_ehEEInIw4BCouDdE8o65xF6k_RtXWgs');

exports.translateText = (req, res) => {
    let lang = req.body.lang || 'ro';
    if (!req.body.text || req.body.text.trim() === '') {
        res.status(400).send({
            message: "Missing text to be translated!"
        });
        return;
    }
    googleTranslate.translate(req.body.text, lang, function (err, translation) {
        console.log(translation);
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while translating."
            });
            return;
        }
        res.send({ translation: translation.translatedText });
    });
}


exports.getAvailableLangs = (req, res) => {
    googleTranslate.getSupportedLanguages(function (err, languageCodes) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving supported languages."
            });
            return;
        }
        res.send({ languages: languageCodes });
    });
}