const settings = require('../settings.json');

const port = process.env.PORT || settings['api-port'];

const path = require('path');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(settings['db-connection']);
const db = mongoose.connection;
db.on('error', () => console.log('LOG >> Database error connection!'));
db.once('open', () => console.log('LOG >> Database connected!'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './static/index.html'));
});

app.use('/api/users', require('./routers/users'));

app.listen(port, ()=>{
    console.log('LOG >> Server application listening at %d', port);
});
