const express = require('express');
const router = express.Router();

const chatRoomController = require('../controllers/chatroom');
const isAuth = require('../middlewares/isAuth');

router.get('/chat/:username', isAuth, chatRoomController.getchatroom);

module.exports = router;