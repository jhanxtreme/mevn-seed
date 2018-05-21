const express = require('express');

const app = express();

const port = process.env.PORT || 8081;

app.listen(port, ()=>{
    console.log('Server application listening at %d', port);
});

module.exports = app;