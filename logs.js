const filterlogfilehandle = require('fs')

module.exports = {
  name: 'logs',
  excludeBadges: [],

  description: 'Deletes messages with too many caps characters',
  execute (message, bot, plugins, settings) {
    if (!settings.HX_LOG_ENABLED) {
      return false
    }

    var datetime = new Date()
    filterlogfilehandle.appendFileSync(settings.HX_LOG_FILENAME, datetime.toUTCString() + '  ' + message.user + ' : ' + message.content + '\n')
    return true
  }
}
