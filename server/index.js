const port = process.env.PORT || 8081;

const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './static/index.html'));
});

app.use('/api/users', require('./routers/users'));

app.listen(port, ()=>{
    console.log('Server application listening at %d', port);
});
