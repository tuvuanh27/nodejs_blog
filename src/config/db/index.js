const mongoose = require('mongoose')

async function connnect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect susscessfully')
    } catch (error) {
        console.log('connect failure')        
    }
}

module.exports = { connnect }
