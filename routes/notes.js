const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');
const { v4: uuidv4 } = require('uuid');
const noteData = require('../db/db.json');

//GET route for retreiveing all Notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//Post Route for a new Note
notes.post('/', (req, res) => {

    const { title, text } = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
      } else {
        res.error('Error in adding Note');
      }
});

module.exports = notes;