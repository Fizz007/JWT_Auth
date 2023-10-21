const express = require('express')

const router = express.Router();

const {signup, signin, deleteUser,signout,updateUser} = require('../controllers/authController');
const verifyToken = require('../utils/verifyUser');

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/signout', signout);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

module.exports = router;