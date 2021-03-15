const express = require('express');
const { getUser, createUser, getUsers, updateUser, deleteUser } = require('../controller/users.controller');
const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
