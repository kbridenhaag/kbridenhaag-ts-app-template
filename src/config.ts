import dotenv from 'dotenv'

dotenv.config()

export const config = Object.freeze({
  port: process.env.PORT || 3000,
  appName: 'App template',
  appNameColor: null
})
