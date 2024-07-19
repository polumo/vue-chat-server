import type { Context, Next } from 'hono'
import { formatErrorResponse, formatResponse } from '../utils/responseFormatter.ts'

export const responseMiddleware = async (c: Context, next: Next) => {
  try {
    await next()

    const data = c.get('data') || null
    const message = c.get('message')
    return c.json(formatResponse(data, message))
  } catch (error: any) {
    const message = error?.message || '发生错误'
    return c.json(formatErrorResponse(message))
  }
}
