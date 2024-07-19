import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarUrl: { type: String },
  status: { type: String },
  createAt: { type: Date, default: Date.now },
  lastLoginAt: { type: Date },
})

export const User = model('User', userSchema)
