// Middlewares
const Middlewares = {

    Apikey : (req, res, next) => {

        if(!req.header('api_key')){
            res.json({'code':100, 'status':'Unauthenticated' });
        }else{
            next()
        }
    
    }

}

module.exports = Middlewares;