const winston = require('winston');

// config winston
winston.configure({
  transports: [
    new(require('winston-daily-rotate-file'))({
      filename: process.env.LOG_DIR + '/application-log',
      datePattern: 'yyyy-MM-dd.',
      prepend: true
    }),
    new(winston.transports.Console)({
      colorize: true,
      timestamp: true,
      level: 'info'
    }),
  ],
});

winston.info('Winston log started');

module.exports = winston;
