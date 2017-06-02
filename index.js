/* โหลด Express มาใช้งาน */
var users = require('./users');
var app = require('express')();
 
var bodyParser = require('body-parser');

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 8888;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/* Routing */

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
 
app.get('/user', function (req, res) {
    res.json(users.findAll());
});
 
app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

app.get('/user/:id/avatar', function (req, res) {
    var id = req.params.id;
    res.json(users.findAvatarById(id));
});
 
app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add new ' + json.name + ' Completed!');
});
 
/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});