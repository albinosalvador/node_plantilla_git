exports.home = function(req, res){
    res.render('index',{
            title: "HOME"
        });
};
exports.about = function(req, res){
    res.render('about',{
        title: 'ABOUT'
    })
}