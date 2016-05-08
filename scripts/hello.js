'use strict';

module.exports = controller => {
    controller.hears('hello', ['direct_mention'], (bot, message) => {
        bot.reply(message, 'Hello!');
    });
}
