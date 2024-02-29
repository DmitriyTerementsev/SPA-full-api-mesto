const routerUsers = require('express').Router();
const {
  getUsers, getUserById, getCurrentUser, changeInfo, changeAvatar,
} = require('../controllers/users');

const {
  validateUserId,
  validateUserInfo,
  validateAvatar,
} = require('../validator/validator');

routerUsers.get('/', getUsers);
routerUsers.get('/me', getCurrentUser);
routerUsers.get('/:userId', validateUserId, getUserById);
routerUsers.patch('/me', validateUserInfo, changeInfo);
routerUsers.patch('/me/avatar', validateAvatar, changeAvatar);

module.exports = routerUsers;
