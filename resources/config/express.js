var express         =   require('express');
var glob            =   require('glob');

var ejs             =   require('ejs'); 
var favicon         =   require('serve-favicon');
var logger          =   require('morgan');
var cookieParser    =   require('cookie-parser');
var bodyParser      =   require('body-parser');
var compress        =   require('compression');
var methodOverride  =   require('method-override');
var partials        =   require('express-partials');

var router         =   require('../../app/routers/index')



module.exports = function(app, config){
    var env = process.env.NODE_ENV || 'development';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env = 'development';
    
    (config);
    
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'ejs');
    /*app.engine('html', require('ejs').renderFile);*/
    
    
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(compress());
    app.use(express.static(config.root + '/resources/public'));
    app.use(partials());
    
    app.use('/', router);
 
    
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
        res.render('error',{
            message: err.message,
            error: {},  
            title: 'error'
        })
    })
    
};