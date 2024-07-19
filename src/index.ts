import type { Context } from 'hono'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { responseMiddleware } from './middlewares/responseMiddleware.ts'
import connectDB from './config/db.ts'

const app = new Hono()

connectDB()

app.use(cors(), responseMiddleware)

export default app
