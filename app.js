// Setting up and testing server

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 1337;

message_log = [];

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.status(200).send(message_log[message_log.length - 1]);});

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
  var text = req.body.text;
  var trigger = req.body.trigger_word;
  var userName = req.body.user_name;
  if(userName !== 'slackbot'){
    var greeting = ""
    var entry = {};
    var hello_pattern = new RegExp(/^hello/)
    var reviewing_pattern = new RegExp(/^reviewing:/)
    var notes_pattern = new RegExp(/^notes:/)
    var score_pattern = new RegExp(/^score:/)
    var end_pattern = new RegExp(/^end/)

   
    if(text.test(reviewing_pattern)){
      new_text = text.replace("reviewing:")
        if(new_text[0] = " "){
          new_text = new_text.substring(1);
        };
      entry['student'] = new_text; 
    }
    else if(text.test(notes_pattern)){
      new_text = text.replace("notes:")
        if(new_text[0] = " "){
          new_text = new_text.substring(1);
        };
      entry['notes'] = new_text; 
    }
    else if(text.test(score_pattern)){
      new_text = text.replace("score:")
        if(new_text[0] = " "){
          new_text = new_text.substring(1);
        };
      entry['score'] = new_text; 
    }   
    else if(text.test(end_pattern)){
       entry['reviewer'] = userName;
       message_log.push(entry);
    }

    if(text.test(hello_pattern)){
      var botPayLoad = {
        text: greeting
      };
    if(text.test(end_pattern)){
      var botPayLoad = {
        text: "Saved! Review by:" + userName + ". Text: " + text
      };
    }
    return res.status(200).json(botPayLoad);
  } 
  else {
    return res.status(200).end();
  }
});
