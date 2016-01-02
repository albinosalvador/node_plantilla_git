var express         =   require('express');
var glob            =   require('glob');

var ejs             =   require('ejs'); 
var favicon         =   require('serve-favicon');
var logger          =   require('morgan');
var cookieParser    =   require('cookie-parser');
var bodyParser      =   require('body-parser');
var compress        =   require('compression');
var methodOverride  =   require('method-override');


module.exports = function(app, config){
    var env = process.env.NODE_ENV || 'development';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env = 'development';
    
    
    app.set('views', config.root + '/app/views');
    app.engine('html', require('ejs').renderFile);
    
    
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(compress());
    app.use(express.static(config.root + '/resources/public'));
    console.log(config.root + '/resources/public');
    var controllers = glob.sync(config.root + '/app/controllers/*.js');
    controllers.forEach(function(controller){
        require(controller)(app);
    });
    
    app.get('/', function(req, res){
        res.render('index.html',{
            title: "Home"
        });
    })
    
    app.use(function(req, res, next){
        var err = new Error('Not Found');
        err.status = 404;
        rext(err)
    });
    
    if(app.get('env') === 'development'){
        app.use(function(err, req, res, nexgt){
            res.status(err.status || 500);
            res.render('error',{
                message: err.message,
                error: err,
                title: 'error'
            });
        });
    };
    
    app.use(function(err, req, res, next){
        res.status(err.status ||500);
        res.render('error.html',{
            message: err.message,
            error: {},  
            title: 'error'
        })
    })
    
};