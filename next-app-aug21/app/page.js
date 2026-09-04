"use client"

// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default  function Home() {

  // await new Promise((resolve)=>
  //       setTimeout(resolve,5000)
  // );
  // const st= undefined()
  const router= useRouter()
  const handleRedirect=()=>{
    router.push("/about")
  }
  return (
    <>
    
    <h1>This is my home page</h1>
    <Link href="/about">About Page</Link>


    <button onClick={handleRedirect}>About button</button>
    
        </>
  );
}

// link tag does not reloads the overall page annd the ancor tag reloads whole page
