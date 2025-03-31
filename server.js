const express = require('express');
const bodyParser = require('body-parser');
//import morgan from 'morgan';
const morgan = require('morgan');
//const cors = require('cors');

const app = express();
const port = 3000;

// Middleware pentru a permite cereri din alte origini (ex: frontend separat)
//app.use(cors());

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
app.listen(port, () => {
    console.log(`Serverul rulează la http://localhost:${port}`);
});

