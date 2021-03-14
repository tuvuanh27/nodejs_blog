const express = require('express');
const route = express.Router();
const courseController = require('../app/controllers/CourseController');

// newsController.index

route.get('/create', courseController.create);
route.get('/:slug', courseController.show);
route.post('/store', courseController.store);

module.exports = route;