// Setting up and testing server

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {res.status(200).send('hello world');});

app.listen(port, function(){
  console.log('Listening on port ' + port);
});

// building the bot

app.post('/hello', function(req, res, next) {
  var userName = req.body.user_name;
  var botPayLoad = {
    text: 'Hello ' + userName + ', welcome type reviewing to start a session!'
  };

  if(userName !== 'slackbot'){
    return res.status(200).json(botPayLoad);
  } else {
    return res.status(200).end();
  }
});

app.post('/reviewing', function(req, res, next) {
  var userName = req.body.user_name;
  var response = req.body;
  var botPayLoad = {
    text: response
  };

  if(userName !== 'slackbot'){
    return res.status(200).json(botPayLoad);
  } else {
    return res.status(200).end();
  }
});