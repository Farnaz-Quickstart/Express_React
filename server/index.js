import express from 'express'
import studentsRouts from './Routes/Students.js'
const app = express();

app.use ('/students', studentsRouts)

app.get ('/', (req, res )=> {
  res.send ("This is main Page")
})

app.listen ('3002', ()=> {
  console.log ("Server is Running on Port 3002")
})

