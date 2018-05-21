const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.use((req, res, next)=>{
    console.log('user route');
    next();
});

router.get('/', usersController.index);

module.exports = router;