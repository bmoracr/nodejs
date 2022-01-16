// Getting mongoose component
const mongoose = require('mongoose');
// Connecting with database url
mongoose.connect('mongodb://database/database');
// Checking if database is connected
mongoose.connection.once('open', ()=>{
    console.log('MongoDB database connection established successfully');
}); 
// Using promises
// .then(db => console.log('DB is connected to'))
    // .catch(err => console.error(err))