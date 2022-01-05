const mongoose = require('mongoose');

mongoose.connect('mongodb://database/database')
    .then(db => console.log('DB is connected to'))
    .catch(err => console.error(err))