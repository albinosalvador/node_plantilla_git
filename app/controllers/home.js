
console.log('Controlador home');
exports.home = function(req, res){
    res.render('index',{
            title: "HOME"
        });
}