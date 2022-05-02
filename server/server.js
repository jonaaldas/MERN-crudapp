import {
  mongoDB
} from './routes/db.js'
import app from '../server/routes/app.js'

mongoDB()

const port = 4010
app.listen(port) 
console.log(`server is running in port ${port}`)