import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function ListStudentsDB() {
  const [students, setStudents] = useState ([])

  const fetchStudents = async () => {
    try {
      const response = await axios.get ("http://localhost:3002/students/")
      console.log ("Fetching Data from DB successfully")
      console.log (response)
      setStudents (response.data)
    }
    catch (error) {
      console.log (error)
    }
  } 

  const handleDelete = async (studentID) => {
    try {
      console.log (`http://localhost:3002/students/${studentID}`)
      const response = await axios.delete (`http://localhost:3002/students/${studentID}`)
      console.log ("Student BEING DELETED")
      fetchStudents()
    }
    catch (error) {
      console.log (error)
    }
  }

  useEffect (()=> {
    console.log ("This is first Load")
    fetchStudents()
  }, [])


  return (
    <>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
       {students.map ((student,index)=> {
        return (
          <tr key={index}>
            <td>{student.StudentID}</td>
            <td>{student.FirstName}</td>
            <td>{student.LastName}</td>
            <td>{student.studentDOB}</td>
            <td><button type="button" onClick={()=>handleDelete(student.StudentID)}>DELETE</button></td>
          </tr>
        )
       })}
      </tbody>
    </Table>
    </>
  )
}
