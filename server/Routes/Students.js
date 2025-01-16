import express from 'express'
import db from '../dbConnection.js'

const Router = express.Router()

Router.get ("/", (req,res)=> {
  db.query ("SELECT * FROM Students", (err,result)=> {
    if (err) {
      console.log ("Error in Listing Students:", err)
      res.status(500).send("error in the Query")
    }   
    else
      res.send (result)
  })
})

Router.post ("/", (req,res)=> {
  console.log ("POST Router")
  const sql = "INSERT into students (FirstName, LastName, DateOfBirth) VALUES  (?, ?, ?)"
  const { FirstName, LastName, DateOfBirth } = req.body; 
  db.query (sql,[FirstName, LastName, DateOfBirth],
    (err,result)=> {
    if (err) {
      console.log ("Error in ADDing Students:", err)
      res.status(500).send("error in the Query")
    }   
    else
      res.status(201).send('Student added successfully');
  })
})

Router.delete ("/:id", (req,res)=>{
  const studentID = req.params.id
  db.query ("DELETE FROM Students WHERE StudentID = ?", [studentID], (err,result)=> {
    if (err) {
      console.log ("Error in Listing Students:", err)
      res.status(500).send("error in the Query")
    }   
    else
      res.send (result)
  })
})

export default Router;