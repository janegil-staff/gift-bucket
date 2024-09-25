const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      level: 'info'
    }),
    new winston.transports.Console({ level: 'error' }),
    new winston.transports.File({
      filename: 'logs/errors.log',
      level: 'error'
    })
  ]
});

module.exports = logger;