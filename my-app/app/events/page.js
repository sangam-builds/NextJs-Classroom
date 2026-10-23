export const revalidate= 120;

import Link from 'next/link';
import React from 'react'

const Event = async() => {
  const response=await fetch("https://jsonplaceholder.typicode.com/posts",{cache:'force-cache'});
  const data= await response.json();

  return (
    <div>
      <Link href={"/"}> Go to home page</Link>
      <h1>Event details</h1>
      {data.map((post)=>(
        <div>
          UserId:<p>{post.userId}</p>
          Id:<p>{post.id}</p>
            Title:<p>{post.title}</p>
            Body:<p>{post.body}</p>

        </div>
      ))}




    </div>
  )
}

export default Event
