const Course = require('../models/Course')
const { multipleMongoseToObject } = require('../../util/mongoose')


class SiteController {
    // [GET] /
    // thêm .lean() sau .find({}) . Khi dùng lean()
    // thì mongoose sẽ không tạo đối tượng mongoose document mà trả về object thuần
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home',{courses}))
            .catch(error => next(error))
    }
    // index(req, res, next) {
    //     Course.find({}).lean()
    //         .then(courses => res.render('home',{courses: multipleMongoseToObject(courses)}))
    //         .catch(error => next(error))
    // }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
