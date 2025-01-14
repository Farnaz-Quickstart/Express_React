import express from 'express'
import studentsRouts from './Routes/Students.js'
import cors from 'cors'
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use ('/students', studentsRouts)


app.get ('/', (req, res )=> {
  res.send ("This is main Page")
})

app.listen ('3002', ()=> {
  console.log ("Server is Running on Port 3002")
})

