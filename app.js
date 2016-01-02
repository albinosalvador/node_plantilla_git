/* Requerimientos inciales de la aplicación express */
var express = require('express'),
    config  = require('./resources/config/config'),
    glob    = require('glob');

/* Cargar los modelos de la aplicación */
var models= glob.sync(config.root + '/app/models/*.js');
models.forEach(function(model){
    require(model);
})

/* Declaramos una aplicación express pasandole los archivos de configuración */
var app = express();

require('./resources/config/express')(app, config);


/* Ponemos a escuchar la aplicacion en el puerto configurado */
app.listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});