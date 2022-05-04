import express from 'express'
import fileUpload from 'express-fileupload'
import postsRoutes from './posts.routes.js'
import cors from'cors'


const app = express()
app.use(cors({
  origin: '*',
  credentials: true
}))
// middlewares
app.use(express.json())
// to upload img
app.use(
  fileUpload({
    useTempFiles:true,
    tempFileDir: './upload'
  })
);
app.use(postsRoutes)

export default app