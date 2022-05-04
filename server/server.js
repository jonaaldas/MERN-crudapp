import {
  mongoDB
} from './routes/db.js'
import app from '../server/routes/app.js'
import cors from 'cors'

// const cors = require('cors');


mongoDB()
// use it before all route definitions


const port = 4014
app.listen(port) 
console.log(`server is running in port ${port}`)