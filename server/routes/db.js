import mongoose from "mongoose";
import {
  URL
} from '../routes/config.js'

export async function mongoDB() {
  try {
    const db = await mongoose.connect(URL)
    console.log(`connected to ${db}`)
  } catch (err) {
    console.error(err)
  }
}