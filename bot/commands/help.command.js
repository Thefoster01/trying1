const Extra = require('telegraf/extra');
const debug = require('debug')('app:bot:commands');

const markup = Extra.markdown();

module.exports = ctx => {
  debug('/help user: %s', ctx.from.username);
  return ctx.reply(
    'Type `@' +
      ctx.botInfo.username +
      ' funny cats` and you will see search result.\n' +
      'Then click on them to send to me!',
    markup,
  );
};
