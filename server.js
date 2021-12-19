const express = require("express");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// initialize db sincronizare
const db = require("./src/models");
db.sequelize.sync();

// welcome
app.use('/ ', (req, res) => {
    res.send('Quote Manager RESTful API - up and running');
});

// add quote routes
require("./src/routes/quote.routes")(app);

// add translation routes
require("./src/routes/translation.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});