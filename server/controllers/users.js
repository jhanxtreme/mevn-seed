const mockData = require('../data/users.json');

const index = (req, res) => {
    res.status(200).json({
        message: 'the users',
        result: mockData
    })
};

module.exports = {
    index
}