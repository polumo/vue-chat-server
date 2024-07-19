import { Hono } from 'hono'
import connectDB from '@/config/db.ts'

const app = new Hono()

connectDB()

export default app
