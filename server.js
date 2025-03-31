const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

// Middleware pentru parsarea datelor trimise prin POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))

// Ruta pentru GET (parametrii sunt în URL)
app.get('/get-data', (req, res) => {
    const name = req.query.name;
    res.send(`Ai trimis prin GET: ${name}`);
});

// Ruta pentru POST (parametrii sunt în corpul cererii)
app.post('/post-data', (req, res) => {
    const email = req.body.email;
    res.send(`Ai trimis prin POST: ${email}`);
});

// Pornirea serverului
app.listen(port, '0.0.0.0', () => {
    console.log(`Serverul rulează la portul: ${port}`);
});

