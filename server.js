const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/assets/index.html'))
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public/assets', express.static(__dirname + 'public/assets'));

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function() {
    console.log("APP listening on PORT" + PORT);
});