import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';

export default function ListStudents() {
  const initialStudents = [
    {
      StudentID: 1,
      FirstName: "John",
      LastName: "Doe",
      studentDOB: "2005-06-15"
    },
    {
      StudentID: 2,
      FirstName: "Jane",
      LastName: "Smith",
      studentDOB: "2004-11-22"
    },
    {
      StudentID: 3,
      FirstName: "Michael",
      LastName: "Johnson",
      studentDOB: "2003-03-05"
    },
    {
      StudentID: 4,
      FirstName: "Emily",
      LastName: "Davis",
      studentDOB: "2006-08-12"
    },
    {
      StudentID: 5,
      FirstName: "Chris",
      LastName: "Brown",
      studentDOB: "2004-01-30"
    }
  ];

  const [students, setStudents] = useState (initialStudents)

  return (
    <>
      <h1>List students</h1>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
       {students.map ((student,index)=> {
        return (
          <tr>
            <td>{student.StudentID}</td>
            <td>{student.FirstName}</td>
            <td>{student.LastName}</td>
            <td>{student.studentDOB}</td>
          </tr>
        )
       })}
      </tbody>
    </Table>
    </>
  )
}
