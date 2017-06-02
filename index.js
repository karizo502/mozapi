/* โหลด Express มาใช้งาน */
var app = require('express')();
var jwt = require("jwt-simple"); 
var auth = require("./auth.js")();  
var users = require("./users.js");  
var users1 = require("./users1.js");  
var cfg = require("./config.js");  
 
var bodyParser = require('body-parser');

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 8888;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(auth.initialize());
/* Routing */

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
 
app.get('/user', auth.authenticate() ,function (req, res) {
    res.json(users1[req.user.id]);
    //res.json(users.findAll());
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
 
app.get("/token/:id", function(req, res) {  
    if (req.params.id) {
        var id = req.params.id;
        var user = users1.find(function(u) {
            return u.id == id;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, cfg.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});