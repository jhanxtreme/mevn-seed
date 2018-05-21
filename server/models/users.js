const mongoose = require('mongoose');

const schema = new mongoose.schema({
    email: { type: string },
    password: { type: string }
});

module.exports = mongoose.model('Users', schema);