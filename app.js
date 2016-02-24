// Setting up and testing server

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var menu = require('./parse.js');

var port = process.env.PORT || 1337;

var message_log = [];

var entry = {};

var word_list = ["student", "score", "notes"]

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
//     text: 'Hello ' + userName + ', welcome type student to start a session!'
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
  var botPayLoad = { text: "Cool"};
  var greeting = "Hello from the other side";
  // var patterns = {
  //   hello: new RegExp(/^hello/),
  //   student: new RegExp(/^student:/),
  //   notes: new RegExp(/^notes:/),
  //   score: new RegExp(/^score:/),
  //   end: new RegExp(/^end/)
  // };

  // for (var menuChoice in patterns) {
  //   if (text.test(patterns[menuChoice])) {
  //     entry[menuChoice] = 
  //   }
  // }

  if(word_list.indexOf(trigger) !== -1) {
    entry[trigger] = parse.term(trigger, text);
  } else if(trigger == "hello"){
    botPayLoad.text = greeting;
  } else if {trigger == "end"){
    entry.reviewer = userName;
    message_log.push(entry);
    entry = {};
    botPayLoad.text = "Saved! Review by:" + userName + ". Text: " + text
  }

  // if (patterns.student.test(text)){
  //   entry.student = menu.student(text);
  // } else if (patterns.notes.test(text)){
  //   entry.notes = menu.notes(text); 
  // } else if (patterns.score.test(text)){
  //   entry.score = menu.score(text); 
  // } else if (patterns.hello.test(text)){
  //   botPayLoad.text = greeting;
  // } else if (patterns.end.test(text)) {
  //   entry.reviewer = userName;
  //   message_log.push(entry);
  //   entry = {};
  //   botPayLoad.text = "Saved! Review by:" + userName + ". Text: " + text
  // } 

  if (userName !== 'slackbot') {
    return res.status(200).json(botPayLoad);
  } else {
    return res.status(200).end();
  }
});
