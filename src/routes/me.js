const express = require('express');
const route = express.Router();
const meController = require('../app/controllers/MeController');

// newsController.index

route.get('/stored/courses', meController.storedCourses);

module.exports = route;