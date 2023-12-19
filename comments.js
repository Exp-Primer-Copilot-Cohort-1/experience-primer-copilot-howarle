// Create web server

// import modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// create web server
var app = express();

// set port
app.listen(3000, function(){
    console.log('start! express server on port 3000');
});

// set static directory
app.use(express.static('public'));

// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set('view engine', 'ejs');

// set router
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/main.html");
});

app.get('/main', function(req, res){
    res.sendFile(__dirname + "/public/main.html");
});

app.post('/email_post', function(req, res){
    // get email data
    console.log(req.body.email);
    // res.send("<h1>welcome! " + req.body.email + "</h1>");
    res.render('email.ejs', {'email': req.body.email});
});

// get ajax data
app.post('/ajax_send_email', function(req, res){
    // get email data
    console.log(req.body.email);
    // check validation about email data
    var responseData = {'result': 'ok', 'email': req.body.email};
    res.json(responseData);
});

// login page
app.get('/login', function(req, res){
    res.sendFile(__dirname + "/public/login.html");
});

// login process
app.post('/login', function(req, res){
    // get email data
    var email = req.body.email;
    var password = req.body.password;
    // check validation about email data
    console.log(email, password);
    var responseData = {'result': 'ok', 'email': email, 'password': password};
    res.json(responseData);
});

// join page
app.get('/join', function(req, res){
    res.sendFile(__dirname + "/public/join.html");
});

// join process
app.post('/join', function(req, res){
    // get email data
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    // check validation about email data
    console.log(email, password, confirmPassword);
    var responseData = {'result': 'ok', 'email': email, 'password': password, 'confirmPassword': confirmPassword};
    res.json(responseData);
});