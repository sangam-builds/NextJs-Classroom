
// incremnetal static regeneration
export const revalidate= 60;
import React from 'react'

const Technology= async()=>{

    const respose=  await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"force-cache"})
    const data= await respose.json();
    const posts=  data.filter((item)=> item.userId===1)
  return (
    <div>
      {posts.map((post)=>(
      <div>
            Id:<p>{post.id}</p>
            Title:<p>{post.title}</p>
            Body:<p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
export default Technology;