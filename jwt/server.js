const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

const PORT = 1000;

app.post('/api/login', (req, res) => {
    const {username, password } = req.body;
    console.log('This is me', username, password); //this is for testing
    res.json({ data: 'it works'}); //this is for testing
});

app.post('/api/signUp', (req, res) => {
    const {username, password1, password2 } = req.body;
    console.log('This is me', username, password1, password2); //this is for testing
    res.json({ data: 'it works'}); //this is for testing
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
});



