const index = (req, res) => {
    res.status(200).json({
        message: 'The user api'
    })
};

module.exports = {
    index
}