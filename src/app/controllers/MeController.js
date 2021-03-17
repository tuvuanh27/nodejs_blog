const Course = require('../models/Course')
const { multipleMongoseToObject } = require('../../util/mongoose')


class MeController {
    
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}),
            Course.countDocumentsDeleted()
        ])
        .then(([courses, deletedCount]) => {
            res.render('me/stored-courses', {
                deletedCount,
                courses: multipleMongoseToObject(courses)
            })
        })
        .catch(next)
        
    }


    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/trash-courses', {courses: multipleMongoseToObject(courses)})
            })
            .catch(next)
    }
}

module.exports = new MeController();
