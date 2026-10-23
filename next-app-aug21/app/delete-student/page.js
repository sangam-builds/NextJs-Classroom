"use client"
import React ,{ useState } from 'react'

const EditStudent = () => {
  const [students,setStudents]=useState([])
      async function deleteStudent(){
          const res= await fetch("http://localhost:3000/api/hello",
              {
                  method:"DELETE",
                  body:JSON.stringify({
                      id:3,
                      name:"Pritam Pandey",
                      course:"NETXJS"
                  })
              })
  
  
              const data= await res.json();
              setStudents(data.students);
          }
    return (
      <div>
        <button onClick={deleteStudent}>+  Add Student</button>
        <div>
        {students.map((item)=> item.name)}
      </div>
      </div>
    )
}

export default EditStudent
