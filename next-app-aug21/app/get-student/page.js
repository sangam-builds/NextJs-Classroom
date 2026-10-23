import React from 'react'

const  GetStudent = async () => {
    const response= await fetch("http://localhost:3000/api/hello")
    const data= await response.json();
  return (
    <div>
      {data.map((item)=> item.name)}
    </div>
  )
}

export default GetStudent
