// Setting up and testing server

var fetch = require('isomorphic-fetch');

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var parse = require('./parse.js');

var port = process.env.PORT || 1337;

var message_log = [];

var entry = {};

var word_list = ["student:", "score:", "notes:"]

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.status(200).send(message_log);
});
app.listen(port, function(){
  console.log('Listening on port ' + port);
});

app.post('/reviewing', function(req, res, next) {
  var text = req.body.text;
  var trigger = req.body.trigger_word;
  var userName = req.body.user_name;
  var botPayLoad = { text: "Cool"};
  var greeting = "Hello from the other side";

  if(word_list.indexOf(trigger) !== -1) {
    entry[trigger] = parse.term(trigger, text);
  } else if(trigger == "hello"){
    botPayLoad.text = greeting;
  } else if (trigger == "end"){
    entry.mentor = userName;
    message_log.push(entry);
    fetch('http://localhost:3000/code_review', {
      method: 'POST',
      body: JSON.stringify(entry),
      header: {
        'Content-Type': 'application/json'
      }
    }).then(response => console.log(response));
    entry = {};
    botPayLoad.text = "Saved! Review by:" + userName + ". Text: " + text
  }

  if (userName !== 'slackbot') {
    return res.status(200).json(botPayLoad);
  } else {
    return res.status(200).end();
  }
});
