import express from 'express'
import fileUpload from 'express-fileupload'
import postsRoutes from './posts.routes.js'



const app = express()

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