const newsRoute = require('./news');
const siteRoute = require('./site');
const coursesRoute = require('./courses');
const meRoute = require('./me');

function route(app) {
    app.use('/news', newsRoute);
    app.use('/courses', coursesRoute);
    app.use('/me', meRoute);

    
    app.use('/', siteRoute);
}

module.exports = route;
