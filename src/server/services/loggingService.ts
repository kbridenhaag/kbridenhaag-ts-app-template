import winston from 'winston'

const isProd = process.env.NODE_ENV === 'production'

export const logger = winston.createLogger({
  level: isProd ? 'info' : 'debug',
  defaultMeta: { module: 'krbidenhaag' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() })
  ]
})
