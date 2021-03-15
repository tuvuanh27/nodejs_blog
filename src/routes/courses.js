const express = require('express');
const route = express.Router();
const courseController = require('../app/controllers/CourseController');

// newsController.index

route.get('/create', courseController.create);
route.get('/:slug', courseController.show);
route.get('/:id/edit', courseController.edit);
route.post('/store', courseController.store);
route.delete('/:id', courseController.delete);
route.put('/:id', courseController.update);

module.exports = route;