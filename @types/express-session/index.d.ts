import 'express-session'

declare module 'express-session' {
  interface Session {
    flash: {
      [key: string]: string[] | string | Record<string, unknown>
    }
  }
}
