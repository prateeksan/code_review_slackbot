# Code_Review_Slackbot

Built by: _@prateeksan_.

> Mentors at Lighthouse Labs are trusted with the noble but tedious task of reviewing code written by their budding students. This app was built to make their lives a little easier by allowing them to tell a SlackBot about their reviews and letting technology take care of the rest.

Code_Review_Slackbot is the API built for [Rotten Coders](http://prateeksanyal.com/rotten-coders/) which uses a slackbot ('code_doge') to collect data regarding code reviews and sends it to the Rails Server as JSON. The slackbot is integrated using Slack's outgoing webhooks.

## Tech-Stack

1. __Slackbot-API__: _NodeJS -v 5.5.0_ - body-parser, express, isomorphic-fetch, request.
2. [__Rails-Server__](https://github.com/nilooravaei/slackers): _Ruby -v 2.2.3_, _Rails -v 4.2.5.1_ - postgresql, turbolinks, bcrypt, engtagger.
2. [__Front-End__](https://github.com/nilooravaei/slackers): HTML, CSS, JQuery, Bootstrap, Font-Awesome, Google Charts, Google Fonts

## More about _Rotten Coders_
[Click Here](http://prateeksanyal.com/rotten-coders/) to learn more about the app in its entirety. 

## Demo

[Click Here](http://rottencode.herokuapp.com/)  to visit the site.

+ Username: _prateeksanyal_
+ Password: _password_

### The SlackBot

The following conversation with the slackbot (code_doge) creates a new code review entry and sends it over to _Rotten Coders_ (the rails server).

![Slack Bot](https://s3.amazonaws.com/freshpulse/rotten_code_images/1_slackbot.png)
