"use client";

import React, { useState } from 'react'

const AddStudent = () => {
    const [students,setStudents]=useState([])
    async function addStudent(){
        const res= await fetch("http://localhost:3000/api/hello",
            {
                method:"POST",
                body:JSON.stringify({
                    id:4,
                    name:"Anamika",
                    course:"NETXJS"
                })
            })


            const data= await res.json();
            setStudents(data.students);
        }
  return (
    <div>
      <button onClick={addStudent}>+  Add Student</button>
      <div>
      {students.map((item)=> item.name)}
    </div>
    </div>
  )
}

export default AddStudent