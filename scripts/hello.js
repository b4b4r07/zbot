// var SLACK_TOKEN = 'xoxb-36586406480-7pYzmpZ7N18pVSR0bUNURVuq';
// var GITHUB_ACCESS_TOKEN = '01ca29654c2b3d279283a3c23c1ab7896a18f552';
// var botkit = require('botkit');
// var githubAPI = require('node-github');
// var controller = botkit.slackbot({
//     debug: false
// });
// controller.spawn({
//     token: SLACK_TOKEN
// }).startRTM();

controller.hears('hello', ['direct_mention', 'mention'], function(bot, message) {
    bot.reply(message, 'hello');
});
