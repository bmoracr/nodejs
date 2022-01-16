//===================== VARIABLES AND REQUIRES ==================
// Importing enviroment variables
    require('dotenv').config();
// Importing database connection
    require('./config/database');
// Getting server library [Express, Cors]
    const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = process.env.PORT || 3000;
    const Middlewares = require('./middleware/middlewares');
//===================== MIDDLEWARES =============================
// Getting middlewares
    let protectedRoutes = [Middlewares.Apikey];
//===================== CORS OPTIONS ============================
// Public path options
    var options = {
            dotfiles: 'ignore',
            etag: false,
            maxAge: '1d',
            setHeaders: function (res, path, stat) {
                res.set('x-timestamp', Date.now())
            }
    }
//=====================  SETTING CORS AND JSON HANDLE ===========
// Settings cors into server 
    app.use(cors())
    app.use(express.json())
//=====================  TEMPLATE MANAGER  ======================
//  Setting ejs engine
    app.set("view engine", "ejs");
    app.set('views', __dirname + '/views');
//=====================  DECLARING ALL ROUTES ===================
// Setting user routes
    app.use('/api/user/', protectedRoutes, require('./routes/user.routes'));
//=====================  DECLARING ROOT ROUTE ===================
// Setting welcome pages route
    app.use('/', (req,res)=>{
        res.render('welcome',{ 
            user:{
                name:"This is user sent",
            }
        });
    });
//=====================  SETTING STATIC PUBLIC FOLDER ===========
//  Setting public path for index
    app.use(express.static(__dirname + '/public')); 
//=====================  CHECKING IF SERVER IS RUNNING ON PORT ==
// Exporting all configurations and run the server
    app.listen(port, ()=>{
        console.log(`Server is running on port: ${port}`);
    });
//===============================================================