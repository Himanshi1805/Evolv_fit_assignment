const express = require('express');

const router = express.Router();

// userId, name, email, steps walked, steps target, performedDate, scheduledDate, calorieIntake, calorieTarget, proteinConsumed, proteinTarget, carbConsumed, carbTarget, fatConsumed, fatTarget

const usersControllers = require('../controller/users_controllers')


router.get("/", usersControllers.getUserById);

router.put('/:uid', usersControllers.updateUser);

module.exports = router;