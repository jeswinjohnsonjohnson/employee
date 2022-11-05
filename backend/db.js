const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeDB', err => {
    if (!err) {
        console.log('db connection succssfull');
    }
    else {
        console.log('error in connection ' + err);
    }
})



module.exports = mongoose;