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

export default Router;