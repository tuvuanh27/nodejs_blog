const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')


class CourseController {
    
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne( {slug: req.params.slug})
            .then( course => {
                res.render('courses/show', {course: mongooseToObject(course)})
            }) 
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [GET] /courses/:id/update
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then( course => {
                res.render('courses/edit', {course: mongooseToObject(course)})
            })
            .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne( {_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }


    // [POST] /courses/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))  // Sau khi thêm xong chuyển hướng về trang home/
            .catch( error => {
                
            })

    }

    // [DELETE] /courses/:id
    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then( () => res.redirect('back'))
            .catch(next)
    }

    
}

module.exports = new CourseController();
