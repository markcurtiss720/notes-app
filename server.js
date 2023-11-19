const express = require('express');
const path = require('path');

//Feedback router imnport
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
//Middleware to serve up static assets from the public folder
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
})
