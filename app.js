// Setting up and testing server

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var menu = require('./menu.js');

var port = process.env.PORT || 1337;

message_log = [];

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.status(200).send(message_log);
});
app.listen(port, function(){
  console.log('Listening on port ' + port);
});

// building the bot

// app.post('/hello', function(req, res, next) {
//   var userName = req.body.user_name;
//   var botPayLoad = {
//     text: 'Hello ' + userName + ', welcome type reviewing to start a session!'
//   };

//   if(userName !== 'slackbot'){
//     return res.status(200).json(botPayLoad);
//   } else {
//     return res.status(200).end();
//   }
// });


app.post('/reviewing', function(req, res, next) {
  var text = req.body.text;
  var trigger = req.body.trigger_word;
  var userName = req.body.user_name;
  var botPayLoad = {};
  if(userName !== 'slackbot'){
    var greeting = "";
    var entry = {};
    var patterns = {
      hello: new RegExp(/^hello/),
      reviewing: new RegExp(/^reviewing:/),
      notes: new RegExp(/^notes:/),
      score: new RegExp(/^score:/),
      end: new RegExp(/^end/)
    };

    // for (var menuChoice in patterns) {
    //   if (text.test(patterns[menuChoice])) {
    //     entry[menuChoice] = 
    //   }
    // }

    if(text.test(patterns.reviewing)){
      entry.student = menu.reviewing(text);
    }
    else if(text.test(patterns.notes)){
      entry.notes = menu.notes(text); 
    }
    else if(text.test(patterns.score)){
      entry.score = menu.score(text); 
    }   
    else if(text.test(patterns.end)){
     entry.reviewer = userName;
     message_log.push(entry);
   }

  if(text.test(hello_pattern)){
    botPayLoad = {
      text: greeting
    };
  }
  if(text.test(end_pattern)){
    botPayLoad = {
      text: "Saved! Review by:" + userName + ". Text: " + text
    };
  }
    return res.status(200).json(botPayLoad);
  } 
  else {
    return res.status(200).end();
  }
});
