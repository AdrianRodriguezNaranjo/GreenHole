require('dotenv').config();
 
// const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;



// Use the public folder to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN
};
// enable CORS
app.use(cors(corsOptions));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
 
// database conection
// const db = require('./models'); 

// For explotation. Database is not dropped.
// db.sequelize.sync(); 

// Development only. Drops and re-sync db everytime the server starts.
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });



app.listen(port, () => {
  console.log('Server started on: ' + port);
});

module.exports = app;